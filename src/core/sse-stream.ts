import * as Errors from './error';
import type { Response } from '../internal/builtin-types';

export class SSEStream implements AsyncIterable<string> {
  private reader: any; // ReadableStreamDefaultReader<Uint8Array>
  private decoder: any; // TextDecoder
  private controller: any; // AbortController
  private responsePromise: Promise<Response>;

  constructor(responsePromise: Promise<Response>, controller: any) {
    this.responsePromise = responsePromise;
    this.controller = controller;
    this.decoder = new (globalThis as any).TextDecoder();
  }

  async *[Symbol.asyncIterator](): AsyncIterator<string> {
    const response = await this.responsePromise;
    if (!response.body) {
      throw new Errors.InconvoError('Missing response body for streaming response');
    }
    this.reader = response.body.getReader();
    try {
      while (true) {
        const { done, value } = await this.reader.read();
        if (done) break;

        // Yield the raw SSE data
        yield this.decoder.decode(value, { stream: true });
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
