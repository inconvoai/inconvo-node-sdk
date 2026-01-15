// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResponseAPI from './response/response';
import {
  Chart,
  Response,
  ResponseCreateParams,
  ResponseCreateResponse,
  ResponseRetrieveParams,
  ResponseRetrieveResponse,
  Table,
} from './response/response';
import { APIPromise } from '../../core/api-promise';
import { ConversationsCursor, type ConversationsCursorParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<ConversationListResponsesConversationsCursor, ConversationListResponse> {
    return this._client.getAPIList('/conversations', ConversationsCursor<ConversationListResponse>, {
      query,
      ...options,
    });
  }
}

export type ConversationListResponsesConversationsCursor = ConversationsCursor<ConversationListResponse>;

export interface InconvoConversation {
  id: string;

  messages: Array<InconvoConversation.Message>;

  userContext: { [key: string]: string | number };
}

export namespace InconvoConversation {
  export interface Message {
    message: string;

    type: 'text' | 'chart' | 'table';

    /**
     * Present on Inconvo responses only
     */
    id?: string;

    /**
     * Charts use vega V5 spec https://vega.github.io/schema/vega/v5.json
     */
    chart?: ResponseAPI.Chart;

    table?: ResponseAPI.Table;
  }
}

export interface ConversationCreateResponse {
  id?: string;
}

export interface ConversationListResponse {
  id: string;

  createdAt: string;

  title: string;

  userContext: { [key: string]: string | number };
}

export interface ConversationCreateParams {
  /**
   * Context key-values used for tenancy / filtering.
   */
  userContext: { [key: string]: unknown };
}

export interface ConversationListParams extends ConversationsCursorParams {
  /**
   * Arbitrary userContext filters, encoded as a deep object. Example: GET
   * /conversations?userContext[userId]=42&userContext[orgId]=12
   */
  userContext?: { [key: string]: string | number };
}

Conversations.Response = Response;

export declare namespace Conversations {
  export {
    type InconvoConversation as InconvoConversation,
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationListResponsesConversationsCursor as ConversationListResponsesConversationsCursor,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams,
  };

  export {
    Response as Response,
    type Chart as Chart,
    type Table as Table,
    type ResponseCreateResponse as ResponseCreateResponse,
    type ResponseRetrieveResponse as ResponseRetrieveResponse,
    type ResponseCreateParams as ResponseCreateParams,
    type ResponseRetrieveParams as ResponseRetrieveParams,
  };
}
