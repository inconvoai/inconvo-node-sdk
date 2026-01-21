// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContextAPI from './context';
import {
  Context,
  ContextDeleteParams,
  ContextDeleteResponse,
  ContextListParams,
  ContextListResponse,
  ContextUploadParams,
  ContextUploadResponse,
} from './context';
import * as UserAPI from './user';
import {
  User,
  UserDeleteParams,
  UserDeleteResponse,
  UserListResponse,
  UserUploadParams,
  UserUploadResponse,
} from './user';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Datasets extends APIResource {
  user: UserAPI.User = new UserAPI.User(this._client);
  context: ContextAPI.Context = new ContextAPI.Context(this._client);

  /**
   * **Deprecated**: Use `GET /datasets/user/{userIdentifier}` instead.
   *
   * List dataset files using userContext query parameter.
   *
   * @deprecated
   */
  list(query: DatasetListParams, options?: RequestOptions): APIPromise<DatasetListResponse> {
    return this._client.get('/datasets', { query, ...options });
  }

  /**
   * **Deprecated**: Use `DELETE /datasets/user/{userIdentifier}/{filename}` instead.
   *
   * Delete a dataset file using userIdentifier query parameter.
   *
   * @deprecated
   */
  delete(
    filename: string,
    params: DatasetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DatasetDeleteResponse> {
    const { userIdentifier } = params;
    return this._client.delete(path`/datasets/${filename}`, { query: { userIdentifier }, ...options });
  }

  /**
   * **Deprecated**: Use `POST /datasets/user/{userIdentifier}` instead.
   *
   * Upload a dataset file with userIdentifier in form data.
   *
   * @deprecated
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
  /**
   * The user identifier
   */
  userIdentifier: string;
}

export interface DatasetDeleteParams {
  /**
   * The user identifier
   */
  userIdentifier: string;
}

export interface DatasetUploadParams {
  /**
   * The file to upload
   */
  file: Uploadable;

  /**
   * The user identifier
   */
  userIdentifier: string;

  /**
   * Optional notes or description for the dataset
   */
  notes?: string;
}

Datasets.User = User;
Datasets.Context = Context;

export declare namespace Datasets {
  export {
    type DatasetListResponse as DatasetListResponse,
    type DatasetDeleteResponse as DatasetDeleteResponse,
    type DatasetUploadResponse as DatasetUploadResponse,
    type DatasetListParams as DatasetListParams,
    type DatasetDeleteParams as DatasetDeleteParams,
    type DatasetUploadParams as DatasetUploadParams,
  };

  export {
    User as User,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserUploadResponse as UserUploadResponse,
    type UserDeleteParams as UserDeleteParams,
    type UserUploadParams as UserUploadParams,
  };

  export {
    Context as Context,
    type ContextListResponse as ContextListResponse,
    type ContextDeleteResponse as ContextDeleteResponse,
    type ContextUploadResponse as ContextUploadResponse,
    type ContextListParams as ContextListParams,
    type ContextDeleteParams as ContextDeleteParams,
    type ContextUploadParams as ContextUploadParams,
  };
}
