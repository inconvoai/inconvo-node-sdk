// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class User extends APIResource {
  /**
   * List all dataset files scoped to a specific user.
   *
   * @example
   * ```ts
   * const users = await client.datasets.user.list('user_123');
   * ```
   */
  list(userIdentifier: string, options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.get(path`/datasets/user/${userIdentifier}`, options);
  }

  /**
   * Delete a dataset file scoped to a specific user.
   *
   * @example
   * ```ts
   * const user = await client.datasets.user.delete('data.csv', {
   *   userIdentifier: 'user_123',
   * });
   * ```
   */
  delete(
    filename: string,
    params: UserDeleteParams,
    options?: RequestOptions,
  ): APIPromise<UserDeleteResponse> {
    const { userIdentifier } = params;
    return this._client.delete(path`/datasets/user/${userIdentifier}/${filename}`, options);
  }

  /**
   * Upload a dataset file scoped to a specific user.
   *
   * @example
   * ```ts
   * const response = await client.datasets.user.upload(
   *   'user_123',
   *   { file: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  upload(
    userIdentifier: string,
    body: UserUploadParams,
    options?: RequestOptions,
  ): APIPromise<UserUploadResponse> {
    return this._client.post(
      path`/datasets/user/${userIdentifier}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface UserListResponse {
  files: Array<string>;
}

export interface UserDeleteResponse {
  file: string;

  success: boolean;

  error?: string;
}

export interface UserUploadResponse {
  file: UserUploadResponse.File;

  error?: string;
}

export namespace UserUploadResponse {
  export interface File {
    name: string;

    path: string;

    size: number;
  }
}

export interface UserDeleteParams {
  /**
   * The user identifier
   */
  userIdentifier: string;
}

export interface UserUploadParams {
  /**
   * The file to upload (CSV or JSON, max 10MB)
   */
  file: Uploadable;

  /**
   * Optional notes or description for the dataset
   */
  notes?: string;
}

export declare namespace User {
  export {
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserUploadResponse as UserUploadResponse,
    type UserDeleteParams as UserDeleteParams,
    type UserUploadParams as UserUploadParams,
  };
}
