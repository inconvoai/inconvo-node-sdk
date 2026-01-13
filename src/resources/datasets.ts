// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
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

  /**
   * Upload dataset file
   */
  upload(body: DatasetUploadParams, options?: RequestOptions): APIPromise<DatasetUploadResponse> {
    return this._client.post('/datasets', multipartFormRequestOptions({ body, ...options }, this._client));
  }
}

export interface DatasetListResponse {
  files: Array<string>;
}

export interface DatasetDeleteResponse {
  file: string;

  success: boolean;

  error?: string;
}

export interface DatasetUploadResponse {
  file: DatasetUploadResponse.File;

  error?: string;
}

export namespace DatasetUploadResponse {
  export interface File {
    name: string;

    path: string;

    size: number;
  }
}

export interface DatasetListParams {
  context: { [key: string]: string | number };
}

export interface DatasetDeleteParams {
  context: { [key: string]: string | number };
}

export interface DatasetUploadParams {
  /**
   * The file to upload
   */
  file: Uploadable;

  /**
   * Context values for scoping the file
   */
  requestContext: { [key: string]: string | number };

  /**
   * Optional notes or description for the dataset
   */
  notes?: string;
}

export declare namespace Datasets {
  export {
    type DatasetListResponse as DatasetListResponse,
    type DatasetDeleteResponse as DatasetDeleteResponse,
    type DatasetUploadResponse as DatasetUploadResponse,
    type DatasetListParams as DatasetListParams,
    type DatasetDeleteParams as DatasetDeleteParams,
    type DatasetUploadParams as DatasetUploadParams,
  };
}
