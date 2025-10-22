// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResponseAPI from './response';
import * as FeedbackAPI from './feedback';
import { Feedback, FeedbackCreateParams, FeedbackResource, FeedbackUpdateParams } from './feedback';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Response extends APIResource {
  feedback: FeedbackAPI.FeedbackResource = new FeedbackAPI.FeedbackResource(this._client);

  /**
   * Create response (sync or streamed)
   */
  create(
    id: string,
    body: ResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse> {
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
}

export interface Chart {
  data: Array<Chart.Data>;

  title: string;

  type: 'line' | 'bar';

  xLabel: string;

  yLabel: string;
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
     * Additional context as key-value pairs
     */
    context: { [key: string]: unknown };

    /**
     * The input message
     */
    message: string;
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
  };

  export {
    FeedbackResource as FeedbackResource,
    type Feedback as Feedback,
    type FeedbackCreateParams as FeedbackCreateParams,
    type FeedbackUpdateParams as FeedbackUpdateParams,
  };
}
