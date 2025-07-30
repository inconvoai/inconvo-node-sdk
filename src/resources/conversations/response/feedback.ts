// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FeedbackResource extends APIResource {
  /**
   * Create feedback
   */
  create(responseID: string, params: FeedbackCreateParams, options?: RequestOptions): APIPromise<Feedback> {
    const { id, ...body } = params;
    return this._client.post(path`/conversations/${id}/response/${responseID}/feedback`, {
      body,
      ...options,
    });
  }

  /**
   * Update feedback
   */
  update(feedbackID: string, params: FeedbackUpdateParams, options?: RequestOptions): APIPromise<Feedback> {
    const { id, response_id, ...body } = params;
    return this._client.patch(path`/conversations/${id}/response/${response_id}/feedback/${feedbackID}`, {
      body,
      ...options,
    });
  }
}

export interface Feedback {
  id: string;

  rating: 'positive' | 'negative';

  comment?: string;
}

export interface FeedbackCreateParams {
  /**
   * Path param:
   */
  id: string;

  /**
   * Body param:
   */
  rating: 'positive' | 'negative';

  /**
   * Body param:
   */
  comment?: string;
}

export interface FeedbackUpdateParams {
  /**
   * Path param:
   */
  id: string;

  /**
   * Path param:
   */
  response_id: string;

  /**
   * Body param:
   */
  comment?: string;

  /**
   * Body param:
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
