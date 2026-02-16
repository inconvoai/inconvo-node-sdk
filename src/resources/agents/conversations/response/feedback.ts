// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class FeedbackResource extends APIResource {}

export interface Feedback {
  id: string;

  rating: 'positive' | 'negative';

  comment?: string;
}

export declare namespace FeedbackResource {
  export { type Feedback as Feedback };
}
