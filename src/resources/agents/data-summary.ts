// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class DataSummary extends APIResource {
  /**
   * Retrieve a summary of data available to the agent
   */
  retrieve(options?: RequestOptions): APIPromise<DataSummaryRetrieveResponse> {
    return this._client.get('/agents/data-summary', options);
  }
}

export interface DataSummaryRetrieveResponse {
  /**
   * A human-readable summary of data available to the agent
   */
  dataSummary: string;
}

export declare namespace DataSummary {
  export { type DataSummaryRetrieveResponse as DataSummaryRetrieveResponse };
}
