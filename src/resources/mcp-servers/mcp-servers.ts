// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MethodsAPI from './methods';
import { Methods } from './methods';

export class McpServers extends APIResource {
  methods: MethodsAPI.Methods = new MethodsAPI.Methods(this._client);
}

McpServers.Methods = Methods;

export declare namespace McpServers {
  export { Methods as Methods };
}
