// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResponseAPI from './response';
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
    body: ResponseCreateParams & { stream: true },
    options?: RequestOptions,
  ): SSEStream<ResponseStreamEvent>;
  create(
    id: string,
    body: ResponseCreateParams & { stream?: false },
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse>;
  create(
    id: string,
    body: ResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse>;
  create(
    id: string,
    body: ResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse> | SSEStream<ResponseStreamEvent> {
    if (body.stream === true) {
      return this._createStreaming(id, body, options);
    }
    return this._client.post(path`/conversations/${id}/response`, { body, ...options });
  }

  /**
   * Get a response
   */
  retrieve(
    responseID: string,
    params: ResponseRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ResponseRetrieveResponse> {
    const { conversation_id } = params;
    return this._client.get(path`/conversations/${conversation_id}/response/${responseID}`, options);
  }

  private _createStreaming(
    id: string,
    body: ResponseCreateParams,
    options?: RequestOptions,
  ): SSEStream<ResponseStreamEvent> {
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

/**
 * Charts use vega V5 spec https://vega.github.io/schema/vega/v5.json
 */
export type Chart = { [key: string]: unknown };

export interface Table {
  body: Array<Array<string>>;

  head: Array<string>;
}

/**
 * Response type for non-streaming create response
 */
export interface ResponseCreateResponse {
  id: string;

  conversationId: string;

  message: string;

  type: 'text' | 'chart' | 'table';

  /**
   * Charts use vega V5 spec https://vega.github.io/schema/vega/v5.json
   */
  chart?: Chart;

  table?: Table;
}

export interface ResponseRetrieveResponse {
  /**
   * Unique identifier for the response
   */
  id: string;

  input: ResponseRetrieveResponse.Input;

  output: ResponseRetrieveResponse.Output;

  /**
   * Array of trace steps
   */
  trace: Array<ResponseRetrieveResponse.Trace>;
}

export namespace ResponseRetrieveResponse {
  export interface Input {
    /**
     * The input message
     */
    message: string;

    /**
     * Additional context as key-value pairs
     */
    userContext: { [key: string]: unknown };
  }

  export interface Output {
    /**
     * The response text
     */
    text: string;

    /**
     * Type of the output
     */
    type: 'text' | 'chart' | 'table';

    /**
     * Charts use vega V5 spec https://vega.github.io/schema/vega/v5.json
     */
    chart?: ResponseAPI.Chart;

    table?: ResponseAPI.Table;
  }

  export interface Trace {
    /**
     * Input data for the trace step
     */
    input: unknown;

    /**
     * Name of the trace step
     */
    name: string;

    /**
     * Output data from the trace step
     */
    output: unknown;
  }
}
/**
 * Event types for streaming responses
 */
export type ResponseStreamEventType = 'response.created' | 'response.progress' | 'response.completed';

export interface BaseResponseStreamEvent {
  type: ResponseStreamEventType;
  id: string;
}

export interface ResponseCreatedEvent extends BaseResponseStreamEvent {
  type: 'response.created';
}

export interface ResponseProgressEvent extends BaseResponseStreamEvent {
  type: 'response.progress';
  message: string;
}

export interface ResponseCompletedEvent extends BaseResponseStreamEvent {
  type: 'response.completed';
  response: ResponseCreateResponse;
}

export type ResponseStreamEvent = ResponseCreatedEvent | ResponseProgressEvent | ResponseCompletedEvent;

/**
 * Response type for streaming create response - wraps SSEStream with typed events
 */
export type ResponseCreateStreamResponse = SSEStream<ResponseStreamEvent>;

export interface ResponseCreateParams {
  message: string;

  /**
   * If true and the client sets `Accept: text/event-stream`, the API returns an SSE
   * stream instead of a single JSON body.
   */
  stream?: boolean;
}

export interface ResponseRetrieveParams {
  conversation_id: string;
}

Response.FeedbackResource = FeedbackResource;

export declare namespace Response {
  export {
    type Chart as Chart,
    type Table as Table,
    type ResponseCreateResponse as ResponseCreateResponse,
    type ResponseRetrieveResponse as ResponseRetrieveResponse,
    type ResponseCreateParams as ResponseCreateParams,
    type ResponseRetrieveParams as ResponseRetrieveParams,
    type ResponseCreateStreamResponse as ResponseCreateStreamResponse,
    type ResponseStreamEventType as ResponseStreamEventType,
    type BaseResponseStreamEvent as BaseResponseStreamEvent,
    type ResponseCreatedEvent as ResponseCreatedEvent,
    type ResponseProgressEvent as ResponseProgressEvent,
    type ResponseCompletedEvent as ResponseCompletedEvent,
    type ResponseStreamEvent as ResponseStreamEvent,
  };

  export {
    FeedbackResource as FeedbackResource,
    type Feedback as Feedback,
    type FeedbackCreateParams as FeedbackCreateParams,
    type FeedbackUpdateParams as FeedbackUpdateParams,
  };
}
