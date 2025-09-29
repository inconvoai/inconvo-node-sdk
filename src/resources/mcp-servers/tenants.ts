// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tenants extends APIResource {
  /**
   * Create a tenant for an MCP Server
   *
   * @example
   * ```ts
   * await client.mcpServers.tenants.create('mcpserver_id', {
   *   body: { 'fromapi@api.com': { organisationId: 'bar' } },
   * });
   * ```
   */
  create(mcpserverID: string, params: TenantCreateParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/mcpservers/${mcpserverID}/tenants`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a tenant mapping from an MCP Server
   *
   * @example
   * ```ts
   * await client.mcpServers.tenants.delete('tenant_key', {
   *   mcpserver_id: 'mcpserver_id',
   * });
   * ```
   */
  delete(tenantKey: string, params: TenantDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { mcpserver_id } = params;
    return this._client.delete(path`/mcpservers/${mcpserver_id}/tenants/${tenantKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TenantCreateParams {
  /**
   * Arbitrary key-value mapping.
   *
   * - Keys are strings.
   * - Values are JSON objects with arbitrary properties.
   */
  body: { [key: string]: { [key: string]: unknown } };
}

export interface TenantDeleteParams {
  mcpserver_id: string;
}

export declare namespace Tenants {
  export { type TenantCreateParams as TenantCreateParams, type TenantDeleteParams as TenantDeleteParams };
}
