// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Retrieve information about agents and their data access
 */
export class DataSummary extends APIResource {
  /**
   * Retrieve a summary of data available to the agent
   *
   * @example
   * ```ts
   * const dataSummary =
   *   await client.agents.dataSummary.retrieve('agentId');
   * ```
   */
  retrieve(agentID: string, options?: RequestOptions): APIPromise<DataSummaryRetrieveResponse> {
    return this._client.get(path`/agents/${agentID}/data-summary`, options);
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
