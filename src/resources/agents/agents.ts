// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DataSummaryAPI from './data-summary';
import { DataSummary, DataSummaryRetrieveResponse } from './data-summary';
import * as ConversationsAPI from './conversations/conversations';
import {
  ConversationCreateParams,
  ConversationCreateResponse,
  ConversationListParams,
  ConversationListResponse,
  ConversationListResponsesConversationsCursor,
  ConversationRetrieveParams,
  Conversations,
  InconvoConversation,
} from './conversations/conversations';
import * as DatasetsAPI from './datasets/datasets';
import { Datasets } from './datasets/datasets';

export class Agents extends APIResource {
  dataSummary: DataSummaryAPI.DataSummary = new DataSummaryAPI.DataSummary(this._client);
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
}

Agents.DataSummary = DataSummary;
Agents.Conversations = Conversations;
Agents.Datasets = Datasets;

export declare namespace Agents {
  export { DataSummary as DataSummary, type DataSummaryRetrieveResponse as DataSummaryRetrieveResponse };

  export {
    Conversations as Conversations,
    type InconvoConversation as InconvoConversation,
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationListResponsesConversationsCursor as ConversationListResponsesConversationsCursor,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationRetrieveParams as ConversationRetrieveParams,
    type ConversationListParams as ConversationListParams,
  };

  export { Datasets as Datasets };
}
