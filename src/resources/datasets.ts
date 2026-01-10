// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Datasets extends APIResource {
  /**
   * List dataset files
   */
  list(query: DatasetListParams, options?: RequestOptions): APIPromise<DatasetListResponse> {
    return this._client.get('/datasets', { query, ...options });
  }

  /**
   * Delete dataset file
   */
  delete(
    filename: string,
    params: DatasetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DatasetDeleteResponse> {
    const { context } = params;
    return this._client.delete(path`/datasets/${filename}`, { query: { context }, ...options });
  }
}

export interface Dataset {
  contentType: string;

  filename: string;

  requestContext: { [key: string]: string | number };

  size: number;

  uploadedAt: string;
}

export type DatasetListResponse = Array<Dataset>;

export interface DatasetDeleteResponse {
  filename: string;

  message: string;

  success: boolean;
}

export interface DatasetListParams {
  context: { [key: string]: string | number };
}

export interface DatasetDeleteParams {
  context: { [key: string]: string | number };
}

export declare namespace Datasets {
  export {
    type Dataset as Dataset,
    type DatasetListResponse as DatasetListResponse,
    type DatasetDeleteResponse as DatasetDeleteResponse,
    type DatasetListParams as DatasetListParams,
    type DatasetDeleteParams as DatasetDeleteParams,
  };
}
