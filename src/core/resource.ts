// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Inconvo } from '../client';

export abstract class APIResource {
  protected _client: Inconvo;

  constructor(client: Inconvo) {
    this._client = client;
  }
}
