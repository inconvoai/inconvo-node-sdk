// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inconvo-mcp/filtering';
import { Metadata, asTextContentResult } from 'inconvo-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inconvo from 'inconvo';

export const metadata: Metadata = {
  resource: 'conversations.response',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/conversations/{id}/response',
};

export const tool: Tool = {
  name: 'create_conversations_response',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate response (sync or streamed)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    conversationId: {\n      type: 'string'\n    },\n    message: {\n      type: 'string'\n    },\n    type: {\n      type: 'string',\n      enum: [        'text',\n        'chart',\n        'table'\n      ]\n    },\n    chart: {\n      $ref: '#/$defs/chart'\n    },\n    table: {\n      $ref: '#/$defs/table'\n    }\n  },\n  required: [    'id',\n    'conversationId',\n    'message',\n    'type'\n  ],\n  $defs: {\n    chart: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              label: {\n                type: 'string'\n              },\n              value: {\n                type: 'number'\n              }\n            },\n            required: [              'label',\n              'value'\n            ]\n          }\n        },\n        type: {\n          type: 'string',\n          enum: [            'line',\n            'bar'\n          ]\n        }\n      },\n      required: [        'data',\n        'type'\n      ]\n    },\n    table: {\n      type: 'object',\n      properties: {\n        body: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          }\n        },\n        head: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'body',\n        'head'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      message: {
        type: 'string',
      },
      stream: {
        type: 'boolean',
        description:
          'If true and the client sets `Accept: text/event-stream`,\nthe API returns an SSE stream instead of a single JSON body.\n',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'message'],
  },
  annotations: {},
};

export const handler = async (client: Inconvo, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.conversations.response.create(id, body)));
};

export default { metadata, tool, handler };
