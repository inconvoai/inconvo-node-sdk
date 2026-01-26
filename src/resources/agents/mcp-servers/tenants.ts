// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tenants extends APIResource {
  /**
   * Create a tenant for an MCP Server
   *
   * @example
   * ```ts
   * const tenant =
   *   await client.agents.mcpServers.tenants.create(
   *     'mcpserver_id',
   *     {
   *       agentId: 'agentId',
   *       tenant: {
   *         'fromapi@api.com': { organisationId: 'bar' },
   *       },
   *     },
   *   );
   * ```
   */
  create(
    mcpserverID: string,
    params: TenantCreateParams,
    options?: RequestOptions,
  ): APIPromise<TenantCreateResponse> {
    const { agentId, tenant } = params;
    return this._client.post(path`/agents/${agentId}/mcpservers/${mcpserverID}/tenants`, {
      body: tenant,
      ...options,
    });
  }

  /**
   * Delete a tenant mapping from an MCP Server
   *
   * @example
   * ```ts
   * const tenant =
   *   await client.agents.mcpServers.tenants.delete(
   *     'mcpserver_id',
   *     { agentId: 'agentId', tenant_key: 'tenant_key' },
   *   );
   * ```
   */
  delete(
    mcpserverID: string,
    params: TenantDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TenantDeleteResponse> {
    const { agentId, tenant_key } = params;
    return this._client.delete(
      path`/agents/${agentId}/mcpservers/${mcpserverID}/tenants/${tenant_key}`,
      options,
    );
  }
}

/**
 * Arbitrary key-value mapping.
 *
 * - Keys are strings.
 * - Values are JSON objects with arbitrary properties.
 */
export type TenantCreateResponse = { [key: string]: { [key: string]: unknown } };

export interface TenantDeleteResponse {
  success: boolean;

  tenantKey: string;
}

export interface TenantCreateParams {
  /**
   * Path param: The unique identifier of the agent
   */
  agentId: string;

  /**
   * Body param: Arbitrary key-value mapping.
   *
   * - Keys are strings.
   * - Values are JSON objects with arbitrary properties.
   */
  tenant: { [key: string]: { [key: string]: unknown } };
}

export interface TenantDeleteParams {
  /**
   * The unique identifier of the agent
   */
  agentId: string;

  tenant_key: string;
}

export declare namespace Tenants {
  export {
    type TenantCreateResponse as TenantCreateResponse,
    type TenantDeleteResponse as TenantDeleteResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantDeleteParams as TenantDeleteParams,
  };
}
