// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FeedbackAPI from './feedback';
import { Feedback, FeedbackResource } from './feedback';
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

  type: 'text' | 'chart' | 'table' | 'error';

  /**
   * Charts use vega V5 spec https://vega.github.io/schema/vega/v5.json
   */
  chart?: Chart;

  table?: Table;
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

Response.FeedbackResource = FeedbackResource;

export declare namespace Response {
  export {
    type Chart as Chart,
    type Table as Table,
    type ResponseCreateResponse as ResponseCreateResponse,
    type ResponseCreateParams as ResponseCreateParams,
  };

  export { FeedbackResource as FeedbackResource, type Feedback as Feedback };
}
