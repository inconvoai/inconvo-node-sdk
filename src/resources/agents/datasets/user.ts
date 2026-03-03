// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

/**
 * Manage dataset files with scoped access.
 *
 * Datasets can be scoped in two ways:
 * - **User-scoped** (`/datasets/user/{userIdentifier}`): Files accessible only to a specific user
 * - **Context-scoped** (`/datasets/context/{contextKey}/{contextValue}`): Files shared with all users matching a context value
 *
 * File storage paths:
 * - User-scoped: `/{orgId}/{agentId}/userIdentifier/{userIdentifier}/filename.csv`
 * - Context-scoped: `/{orgId}/{agentId}/userContext/{contextKey}:{contextValue}/filename.csv`
 */
export class User extends APIResource {
  /**
   * List all dataset files scoped to a specific user.
   *
   * @example
   * ```ts
   * const users = await client.agents.datasets.user.list(
   *   'user_123',
   *   { agentId: 'agentId' },
   * );
   * ```
   */
  list(
    userIdentifier: string,
    params: UserListParams,
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    const { agentId } = params;
    return this._client.get(path`/agents/${agentId}/datasets/user/${userIdentifier}`, options);
  }

  /**
   * Delete a dataset file scoped to a specific user.
   *
   * @example
   * ```ts
   * const user = await client.agents.datasets.user.delete(
   *   'data.csv',
   *   { agentId: 'agentId', userIdentifier: 'user_123' },
   * );
   * ```
   */
  delete(
    filename: string,
    params: UserDeleteParams,
    options?: RequestOptions,
  ): APIPromise<UserDeleteResponse> {
    const { agentId, userIdentifier } = params;
    return this._client.delete(path`/agents/${agentId}/datasets/user/${userIdentifier}/${filename}`, options);
  }

  /**
   * Upload a dataset file scoped to a specific user.
   *
   * @example
   * ```ts
   * const response = await client.agents.datasets.user.upload(
   *   'user_123',
   *   {
   *     agentId: 'agentId',
   *     file: fs.createReadStream('path/to/file'),
   *   },
   * );
   * ```
   */
  upload(
    userIdentifier: string,
    params: UserUploadParams,
    options?: RequestOptions,
  ): APIPromise<UserUploadResponse> {
    const { agentId, ...body } = params;
    return this._client.post(
      path`/agents/${agentId}/datasets/user/${userIdentifier}`,
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

export interface UserListParams {
  /**
   * The unique identifier of the agent
   */
  agentId: string;
}

export interface UserDeleteParams {
  /**
   * The unique identifier of the agent
   */
  agentId: string;

  /**
   * The user identifier
   */
  userIdentifier: string;
}

export interface UserUploadParams {
  /**
   * Path param: The unique identifier of the agent
   */
  agentId: string;

  /**
   * Body param: The file to upload (CSV or JSON, max 10MB)
   */
  file: Uploadable;

  /**
   * Body param: Optional notes or description for the dataset
   */
  notes?: string;
}

export declare namespace User {
  export {
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserUploadResponse as UserUploadResponse,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserUploadParams as UserUploadParams,
  };
}
