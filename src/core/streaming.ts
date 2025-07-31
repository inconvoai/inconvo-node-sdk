import * as Errors from './error';
import type { Response } from '../internal/builtin-types';

export interface StreamEvent {
  data?: string;
  event?: string;
  id?: string;
  retry?: number;
}

export class Stream<T> implements AsyncIterable<T> {
  private reader: any; // ReadableStreamDefaultReader<Uint8Array>
  private decoder: any; // TextDecoder
  private buffer = '';
  private controller: any; // AbortController
  private responsePromise: Promise<Response>;

  constructor(
    responsePromise: Promise<Response>,
    controller: any,
    private parseEvent: (event: StreamEvent) => T | undefined,
  ) {
    this.responsePromise = responsePromise;
    this.controller = controller;
    this.decoder = new (globalThis as any).TextDecoder();
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    const response = await this.responsePromise;
    if (!response.body) {
      throw new Errors.InconvoError('Missing response body for streaming response');
    }
    this.reader = response.body.getReader();
    try {
      while (true) {
        const { done, value } = await this.reader.read();
        if (done) break;

        this.buffer += this.decoder.decode(value, { stream: true });

        const events = this.parseSSE();
        for (const event of events) {
          const parsed = this.parseEvent(event);
          if (parsed !== undefined) {
            yield parsed;
          }
        }
      }

      // Flush any remaining buffer
      if (this.buffer.trim()) {
        const events = this.parseSSE(true);
        for (const event of events) {
          const parsed = this.parseEvent(event);
          if (parsed !== undefined) {
            yield parsed;
          }
        }
      }
    } finally {
      this.reader.releaseLock();
    }
  }

  private parseSSE(flush = false): StreamEvent[] {
    const events: StreamEvent[] = [];
    const lines = this.buffer.split('\n');

    let currentEvent: StreamEvent = {};
    let i = 0;

    for (; i < lines.length; i++) {
      const line = lines[i];

      if (!line || line === '' || line === '\r') {
        // Empty line denotes end of event
        if (Object.keys(currentEvent).length > 0) {
          events.push(currentEvent);
          currentEvent = {};
        }
        continue;
      }

      if (!line || line.startsWith(':')) {
        // Comment line, ignore
        continue;
      }

      const colonIndex = line?.indexOf(':') ?? -1;
      if (colonIndex === -1) {
        // Line without colon, treat entire line as field name
        continue;
      }

      const field = line.substring(0, colonIndex);
      let value = line.substring(colonIndex + 1);

      // Remove leading space from value if present
      if (value.startsWith(' ')) {
        value = value.substring(1);
      }

      switch (field) {
        case 'data':
          currentEvent.data = currentEvent.data ? currentEvent.data + '\n' + value : value;
          break;
        case 'event':
          currentEvent.event = value;
          break;
        case 'id':
          currentEvent.id = value;
          break;
        case 'retry':
          const retryTime = parseInt(value, 10);
          if (!isNaN(retryTime)) {
            currentEvent.retry = retryTime;
          }
          break;
      }
    }

    if (flush && Object.keys(currentEvent).length > 0) {
      events.push(currentEvent);
      this.buffer = '';
    } else {
      // Keep incomplete lines in buffer
      this.buffer = lines.slice(i).join('\n');
    }

    return events;
  }

  async cancel(): Promise<void> {
    this.controller.abort();
    await this.reader.cancel();
  }
}

export function createSSEStream<T>(
  responsePromise: Promise<Response>,
  controller: any,
  parseEvent: (event: StreamEvent) => T | undefined,
): Stream<T> {
  return new Stream(responsePromise, controller, parseEvent);
}
