// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FeedbackAPI from './feedback';
import { Feedback, FeedbackCreateParams, FeedbackResource, FeedbackUpdateParams } from './feedback';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';
import { Stream, StreamEvent, createSSEStream } from '../../../core/streaming';

export class Response extends APIResource {
  feedback: FeedbackAPI.FeedbackResource = new FeedbackAPI.FeedbackResource(this._client);

  /**
   * Create response (sync or streamed)
   */
  create(
    id: string,
    body: ResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse> | Stream<ResponseCreateResponse>;
  create(
    id: string,
    body: ResponseCreateParams & { stream?: false },
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse>;
  create(
    id: string,
    body: ResponseCreateParams & { stream: true },
    options?: RequestOptions,
  ): Stream<ResponseCreateResponse>;
  create(
    id: string,
    body: ResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse> | Stream<ResponseCreateResponse> {
    if (body.stream === true) {
      return this._createStreaming(id, body, options);
    }
    return this._client.post(path`/conversations/${id}/response`, { body, ...options });
  }

  private _createStreaming(
    id: string,
    body: ResponseCreateParams,
    options?: RequestOptions,
  ): Stream<ResponseCreateResponse> {
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

    // Get the raw response promise
    const apiPromise = this._client.post(path`/conversations/${id}/response`, {
      body,
      ...requestOptions,
    });

    // Extract the response promise
    const responsePromise = apiPromise.asResponse();

    return createSSEStream<ResponseCreateResponse>(responsePromise, controller, (event: StreamEvent) => {
      if (event.data) {
        try {
          return JSON.parse(event.data) as ResponseCreateResponse;
        } catch (error) {
          // Silently ignore parse errors for now
        }
      }
      return undefined;
    });
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
