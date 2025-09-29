// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class McpServers extends APIResource {
  /**
   * Delete a tenant mapping from an MCP Server
   *
   * @example
   * ```ts
   * await client.mcpServers.deleteTenant('tenant_key', {
   *   mcpserver_id: 'mcpserver_id',
   * });
   * ```
   */
  deleteTenant(
    tenantKey: string,
    params: McpServerDeleteTenantParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { mcpserver_id } = params;
    return this._client.delete(path`/mcpservers/${mcpserver_id}/tenants/${tenantKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upsert tenants for an MCP Server
   *
   * @example
   * ```ts
   * await client.mcpServers.upsertTenants('mcpserver_id', {
   *   tenants_upsert_request: {
   *     'fromapi@api.com': { organisationId: 1 },
   *   },
   * });
   * ```
   */
  upsertTenants(
    mcpserverID: string,
    params: McpServerUpsertTenantsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { tenants_upsert_request } = params;
    return this._client.post(path`/mcpservers/${mcpserverID}/tenants`, {
      body: tenants_upsert_request,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type TenantsUpsertRequest = { [key: string]: TenantsUpsertRequest.item };

export namespace TenantsUpsertRequest {
  export interface item {
    organisationId: number;
  }
}

export interface McpServerDeleteTenantParams {
  mcpserver_id: string;
}

export interface McpServerUpsertTenantsParams {
  tenants_upsert_request: TenantsUpsertRequest;
}

export declare namespace McpServers {
  export {
    type TenantsUpsertRequest as TenantsUpsertRequest,
    type McpServerDeleteTenantParams as McpServerDeleteTenantParams,
    type McpServerUpsertTenantsParams as McpServerUpsertTenantsParams,
  };
}
