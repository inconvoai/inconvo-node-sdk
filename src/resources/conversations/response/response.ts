// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FeedbackAPI from './feedback';
import { Feedback, FeedbackCreateParams, FeedbackResource, FeedbackUpdateParams } from './feedback';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';
import { SSEStream, createSSEStream } from '../../../core/sse-stream';

export class Response extends APIResource {
  feedback: FeedbackAPI.FeedbackResource = new FeedbackAPI.FeedbackResource(this._client);

  /**
   * Create response (sync or streamed)
   */
  create(
    id: string,
    body: ResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse> | SSEStream;
  create(
    id: string,
    body: ResponseCreateParams & { stream?: false },
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse>;
  create(id: string, body: ResponseCreateParams & { stream: true }, options?: RequestOptions): SSEStream;
  create(
    id: string,
    body: ResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse> | SSEStream {
    if (body.stream === true) {
      return this._createStreaming(id, body, options);
    }
    return this._client.post(path`/conversations/${id}/response`, { body, ...options });
  }

  private _createStreaming(id: string, body: ResponseCreateParams, options?: RequestOptions): SSEStream {
    // Create a controller for aborting the request if needed
    const controller =
      (globalThis as any).AbortController ? new (globalThis as any).AbortController() : undefined;

    const requestOptions = {
      ...options,
      headers: {
        ...options?.headers,
        Accept: 'text/event-stream',
      },
      signal: controller?.signal,
      __binaryResponse: true,
    };

    // When __binaryResponse is true, post() returns the raw Response directly
    const responsePromise = this._client.post(path`/conversations/${id}/response`, {
      body,
      ...requestOptions,
    }) as Promise<globalThis.Response>;

    return createSSEStream(responsePromise, controller);
  }
}

export interface Chart {
  data: Array<Chart.Data>;

  type: 'line' | 'bar';
}

export namespace Chart {
  export interface Data {
    label: string;

    value: number;
  }
}

export interface Table {
  body: Array<Array<string>>;

  head: Array<string>;
}

export interface ResponseCreateResponse {
  id: string;

  conversationId: string;

  message: string;

  type: 'text' | 'chart' | 'table';

  chart?: Chart;

  table?: Table;
}

export interface ResponseCreateParams {
  message: string;

  /**
   * If true and the client sets `Accept: text/event-stream`, the API returns an SSE
   * stream instead of a single JSON body.
   */
  stream?: boolean;
}

Response.FeedbackResource = FeedbackResource;

export declare namespace Response {
  export {
    type Chart as Chart,
    type Table as Table,
    type ResponseCreateResponse as ResponseCreateResponse,
    type ResponseCreateParams as ResponseCreateParams,
  };

  export {
    FeedbackResource as FeedbackResource,
    type Feedback as Feedback,
    type FeedbackCreateParams as FeedbackCreateParams,
    type FeedbackUpdateParams as FeedbackUpdateParams,
  };
}
