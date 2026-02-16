// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class FeedbackResource extends APIResource {
  /**
   * Create feedback
   *
   * @example
   * ```ts
   * const feedback =
   *   await client.agents.conversations.response.feedback.create(
   *     'response_id',
   *     {
   *       agentId: 'agentId',
   *       conversation_id: 'conversation_id',
   *       rating: 'positive',
   *     },
   *   );
   * ```
   */
  create(responseID: string, params: FeedbackCreateParams, options?: RequestOptions): APIPromise<Feedback> {
    const { agentId, conversation_id, ...body } = params;
    return this._client.post(
      path`/agents/${agentId}/conversations/${conversation_id}/response/${responseID}/feedback`,
      { body, ...options },
    );
  }

  /**
   * Update feedback
   *
   * @example
   * ```ts
   * const feedback =
   *   await client.agents.conversations.response.feedback.update(
   *     'feedback_id',
   *     {
   *       agentId: 'agentId',
   *       conversation_id: 'conversation_id',
   *       response_id: 'response_id',
   *     },
   *   );
   * ```
   */
  update(feedbackID: string, params: FeedbackUpdateParams, options?: RequestOptions): APIPromise<Feedback> {
    const { agentId, conversation_id, response_id, ...body } = params;
    return this._client.patch(
      path`/agents/${agentId}/conversations/${conversation_id}/response/${response_id}/feedback/${feedbackID}`,
      { body, ...options },
    );
  }
}

export interface Feedback {
  id: string;

  rating: 'positive' | 'negative';

  comment?: string;
}

export interface FeedbackCreateParams {
  /**
   * Path param: The unique identifier of the agent
   */
  agentId: string;

  /**
   * Path param
   */
  conversation_id: string;

  /**
   * Body param
   */
  rating: 'positive' | 'negative';

  /**
   * Body param
   */
  comment?: string;
}

export interface FeedbackUpdateParams {
  /**
   * Path param: The unique identifier of the agent
   */
  agentId: string;

  /**
   * Path param
   */
  conversation_id: string;

  /**
   * Path param
   */
  response_id: string;

  /**
   * Body param
   */
  comment?: string;

  /**
   * Body param
   */
  rating?: 'positive' | 'negative';
}

export declare namespace FeedbackResource {
  export {
    type Feedback as Feedback,
    type FeedbackCreateParams as FeedbackCreateParams,
    type FeedbackUpdateParams as FeedbackUpdateParams,
  };
}
