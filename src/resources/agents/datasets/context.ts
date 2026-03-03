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
export class Context extends APIResource {
  /**
   * List all dataset files scoped to a context value. These files are shared with
   * all users who have this context value. Requires User Context to be enabled.
   *
   * @example
   * ```ts
   * const contexts = await client.agents.datasets.context.list(
   *   'org_456',
   *   { agentId: 'agentId', contextKey: 'orgId' },
   * );
   * ```
   */
  list(
    contextValue: string,
    params: ContextListParams,
    options?: RequestOptions,
  ): APIPromise<ContextListResponse> {
    const { agentId, contextKey } = params;
    return this._client.get(path`/agents/${agentId}/datasets/context/${contextKey}/${contextValue}`, options);
  }

  /**
   * Delete a dataset file scoped to a context value. Requires User Context to be
   * enabled.
   *
   * @example
   * ```ts
   * const context = await client.agents.datasets.context.delete(
   *   'shared_data.csv',
   *   {
   *     agentId: 'agentId',
   *     contextKey: 'orgId',
   *     contextValue: 'org_456',
   *   },
   * );
   * ```
   */
  delete(
    filename: string,
    params: ContextDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ContextDeleteResponse> {
    const { agentId, contextKey, contextValue } = params;
    return this._client.delete(
      path`/agents/${agentId}/datasets/context/${contextKey}/${contextValue}/${filename}`,
      options,
    );
  }

  /**
   * Upload a dataset file scoped to a context value. This file will be shared with
   * all users who have this context value. Requires User Context to be enabled and
   * contextKey to be defined in the schema.
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.datasets.context.upload('org_456', {
   *     agentId: 'agentId',
   *     contextKey: 'orgId',
   *     file: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  upload(
    contextValue: string,
    params: ContextUploadParams,
    options?: RequestOptions,
  ): APIPromise<ContextUploadResponse> {
    const { agentId, contextKey, ...body } = params;
    return this._client.post(
      path`/agents/${agentId}/datasets/context/${contextKey}/${contextValue}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface ContextListResponse {
  files: Array<string>;
}

export interface ContextDeleteResponse {
  file: string;

  success: boolean;

  error?: string;
}

export interface ContextUploadResponse {
  file: ContextUploadResponse.File;

  error?: string;
}

export namespace ContextUploadResponse {
  export interface File {
    name: string;

    path: string;

    size: number;
  }
}

export interface ContextListParams {
  /**
   * The unique identifier of the agent
   */
  agentId: string;

  /**
   * The context key (e.g., "orgId", "teamId")
   */
  contextKey: string;
}

export interface ContextDeleteParams {
  /**
   * The unique identifier of the agent
   */
  agentId: string;

  /**
   * The context key (e.g., "orgId", "teamId")
   */
  contextKey: string;

  /**
   * The context value
   */
  contextValue: string;
}

export interface ContextUploadParams {
  /**
   * Path param: The unique identifier of the agent
   */
  agentId: string;

  /**
   * Path param: The context key (e.g., "orgId", "teamId")
   */
  contextKey: string;

  /**
   * Body param: The file to upload (CSV or JSON, max 10MB)
   */
  file: Uploadable;

  /**
   * Body param: Optional notes or description for the dataset
   */
  notes?: string;
}

export declare namespace Context {
  export {
    type ContextListResponse as ContextListResponse,
    type ContextDeleteResponse as ContextDeleteResponse,
    type ContextUploadResponse as ContextUploadResponse,
    type ContextListParams as ContextListParams,
    type ContextDeleteParams as ContextDeleteParams,
    type ContextUploadParams as ContextUploadParams,
  };
}
