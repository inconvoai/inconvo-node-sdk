// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContextAPI from './context';
import {
  Context,
  ContextDeleteParams,
  ContextDeleteResponse,
  ContextListParams,
  ContextListResponse,
  ContextUploadParams,
  ContextUploadResponse,
} from './context';
import * as UserAPI from './user';
import {
  User,
  UserDeleteParams,
  UserDeleteResponse,
  UserListResponse,
  UserUploadParams,
  UserUploadResponse,
} from './user';

export class Datasets extends APIResource {
  user: UserAPI.User = new UserAPI.User(this._client);
  context: ContextAPI.Context = new ContextAPI.Context(this._client);
}

Datasets.User = User;
Datasets.Context = Context;

export declare namespace Datasets {
  export {
    User as User,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserUploadResponse as UserUploadResponse,
    type UserDeleteParams as UserDeleteParams,
    type UserUploadParams as UserUploadParams,
  };

  export {
    Context as Context,
    type ContextListResponse as ContextListResponse,
    type ContextDeleteResponse as ContextDeleteResponse,
    type ContextUploadResponse as ContextUploadResponse,
    type ContextListParams as ContextListParams,
    type ContextDeleteParams as ContextDeleteParams,
    type ContextUploadParams as ContextUploadParams,
  };
}
