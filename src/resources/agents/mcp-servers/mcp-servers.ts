// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TenantsAPI from './tenants';
import {
  TenantCreateParams,
  TenantCreateResponse,
  TenantDeleteParams,
  TenantDeleteResponse,
  Tenants,
} from './tenants';

export class McpServers extends APIResource {
  tenants: TenantsAPI.Tenants = new TenantsAPI.Tenants(this._client);
}

McpServers.Tenants = Tenants;

export declare namespace McpServers {
  export {
    Tenants as Tenants,
    type TenantCreateResponse as TenantCreateResponse,
    type TenantDeleteResponse as TenantDeleteResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantDeleteParams as TenantDeleteParams,
  };
}
