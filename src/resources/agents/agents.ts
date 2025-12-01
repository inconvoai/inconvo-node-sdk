// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DataSummaryAPI from './data-summary';
import { DataSummary, DataSummaryRetrieveResponse } from './data-summary';

export class Agents extends APIResource {
  dataSummary: DataSummaryAPI.DataSummary = new DataSummaryAPI.DataSummary(this._client);
}

Agents.DataSummary = DataSummary;

export declare namespace Agents {
  export { DataSummary as DataSummary, type DataSummaryRetrieveResponse as DataSummaryRetrieveResponse };
}
