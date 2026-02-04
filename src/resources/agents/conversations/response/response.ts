// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ResponseAPI from './response';
import * as FeedbackAPI from './feedback';
import { Feedback, FeedbackCreateParams, FeedbackResource, FeedbackUpdateParams } from './feedback';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Response extends APIResource {
  feedback: FeedbackAPI.FeedbackResource = new FeedbackAPI.FeedbackResource(this._client);

  /**
   * Create response (sync or streamed)
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.conversations.response.create('id', {
   *     agentId: 'agentId',
   *     message: 'message',
   *   });
   * ```
   */
  create(
    id: string,
    params: ResponseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCreateResponse> {
    const { agentId, ...body } = params;
    return this._client.post(path`/agents/${agentId}/conversations/${id}/response`, { body, ...options });
  }

  /**
   * Get a response
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.conversations.response.retrieve(
   *     'response_id',
   *     {
   *       agentId: 'agentId',
   *       conversation_id: 'conversation_id',
   *     },
   *   );
   * ```
   */
  retrieve(
    responseID: string,
    params: ResponseRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ResponseRetrieveResponse> {
    const { agentId, conversation_id } = params;
    return this._client.get(
      path`/agents/${agentId}/conversations/${conversation_id}/response/${responseID}`,
      options,
    );
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
     * Additional context as key-value pairs (null when user context is disabled)
     */
    userContext: { [key: string]: unknown } | null;
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

export interface ResponseCreateParams {
  /**
   * Path param: The unique identifier of the agent
   */
  agentId: string;

  /**
   * Body param
   */
  message: string;

  /**
   * Body param: If true and the client sets `Accept: text/event-stream`, the API
   * returns an SSE stream instead of a single JSON body.
   */
  stream?: boolean;
}

export interface ResponseRetrieveParams {
  /**
   * The unique identifier of the agent
   */
  agentId: string;

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
