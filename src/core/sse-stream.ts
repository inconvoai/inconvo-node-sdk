import * as Errors from './error';
import type { Response } from '../internal/builtin-types';
import type { StreamEvent } from './streaming-events';

export class SSEStream implements AsyncIterable<StreamEvent> {
  private reader: any; // ReadableStreamDefaultReader<Uint8Array>
  private decoder: any; // TextDecoder
  private controller: any; // AbortController
  private responsePromise: Promise<Response>;

  constructor(responsePromise: Promise<Response>, controller: any) {
    this.responsePromise = responsePromise;
    this.controller = controller;
    this.decoder = new (globalThis as any).TextDecoder();
  }

  async *[Symbol.asyncIterator](): AsyncIterator<StreamEvent> {
    const response = await this.responsePromise;
    if (!response.body) {
      throw new Errors.InconvoError('Missing response body for streaming response');
    }
    this.reader = response.body.getReader();
    let buffer = '';
    try {
      while (true) {
        const { done, value } = await this.reader.read();
        if (done) break;

        buffer += this.decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.trim() === '') continue;
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;
            try {
              const event = JSON.parse(data) as StreamEvent;
              yield event;
            } catch (e) {
              // Skip malformed events
            }
          }
        }
      }
    } finally {
      this.reader.releaseLock();
    }
  }

  async cancel(): Promise<void> {
    this.controller.abort();
    await this.reader.cancel();
  }
}

export function createSSEStream(responsePromise: Promise<Response>, controller: any): SSEStream {
  return new SSEStream(responsePromise, controller);
}

export type { StreamEvent } from './streaming-events';
