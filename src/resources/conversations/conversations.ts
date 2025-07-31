// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResponseAPI from './response/response';
import { Chart, Response, ResponseCreateParams, ResponseCreateResponse, Table } from './response/response';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conversations extends APIResource {
  response: ResponseAPI.Response = new ResponseAPI.Response(this._client);

  /**
   * Create conversation
   */
  create(body: ConversationCreateParams, options?: RequestOptions): APIPromise<ConversationCreateResponse> {
    return this._client.post('/conversations', { body, ...options });
  }

  /**
   * Retrieve conversation
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<InconvoConversation> {
    return this._client.get(path`/conversations/${id}`, options);
  }

  /**
   * List conversations
   */
  list(
    query: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationListResponse> {
    return this._client.get('/conversations', { query, ...options });
  }
}

export interface InconvoConversation {
  id: string;

  context: { [key: string]: string | number };

  messages: Array<InconvoConversation.Message>;
}

export namespace InconvoConversation {
  export interface Message {
    message: string;

    type: 'text' | 'chart' | 'table';

    /**
     * Present on Inconvo responses only
     */
    id?: string;

    chart?: ResponseAPI.Chart;

    table?: ResponseAPI.Table;
  }
}

export interface ConversationCreateResponse {
  id?: string;
}

export interface ConversationListResponse {
  items: Array<InconvoConversation>;

  nextCursor?: string;
}

export interface ConversationCreateParams {
  /**
   * Context key-values used for tenancy / filtering.
   */
  context: { [key: string]: unknown };
}

export interface ConversationListParams {
  context?: ConversationListParams.Context;

  cursor?: string;

  limit?: number;
}

export namespace ConversationListParams {
  export interface Context {
    /**
     * Filter by arbitrary context key/value.
     */
    '{key}'?: string | number;
  }
}

Conversations.Response = Response;

export declare namespace Conversations {
  export {
    type InconvoConversation as InconvoConversation,
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams,
  };

  export {
    Response as Response,
    type Chart as Chart,
    type Table as Table,
    type ResponseCreateResponse as ResponseCreateResponse,
    type ResponseCreateParams as ResponseCreateParams,
  };
}
