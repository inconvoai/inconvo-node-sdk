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
   * const tenant = await client.mcpServers.tenants.create(
   *   'mcpserver_id',
   *   {
   *     tenant: {
   *       'fromapi@api.com': { organisationId: 'bar' },
   *     },
   *   },
   * );
   * ```
   */
  create(
    mcpserverID: string,
    params: TenantCreateParams,
    options?: RequestOptions,
  ): APIPromise<TenantCreateResponse> {
    const { tenant } = params;
    return this._client.post(path`/mcpservers/${mcpserverID}/tenants`, { body: tenant, ...options });
  }

  /**
   * Delete a tenant mapping from an MCP Server
   *
   * @example
   * ```ts
   * await client.mcpServers.tenants.delete(
   *   'mcpserver_id',
   *   'tenant_key',
   * );
   * ```
   */
  delete(mcpserverID: string, tenantKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/mcpservers/${mcpserverID}/tenants/${tenantKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Arbitrary key-value mapping.
 *
 * - Keys are strings.
 * - Values are JSON objects with arbitrary properties.
 */
export type TenantCreateResponse = { [key: string]: { [key: string]: unknown } };

export interface TenantCreateParams {
  /**
   * Arbitrary key-value mapping.
   *
   * - Keys are strings.
   * - Values are JSON objects with arbitrary properties.
   */
  tenant: { [key: string]: { [key: string]: unknown } };
}

export declare namespace Tenants {
  export { type TenantCreateResponse as TenantCreateResponse, type TenantCreateParams as TenantCreateParams };
}
