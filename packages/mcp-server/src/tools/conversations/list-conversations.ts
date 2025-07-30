// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inconvo-mcp/filtering';
import { Metadata, asTextContentResult } from 'inconvo-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inconvo from 'inconvo';

export const metadata: Metadata = {
  resource: 'conversations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/conversations',
};

export const tool: Tool = {
  name: 'list_conversations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList conversations\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/inconvo_conversation'\n      }\n    },\n    nextCursor: {\n      type: 'string'\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    inconvo_conversation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        context: {\n          type: 'object'\n        },\n        messages: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              message: {\n                type: 'string'\n              },\n              type: {\n                type: 'string',\n                enum: [                  'text',\n                  'chart',\n                  'table'\n                ]\n              },\n              id: {\n                type: 'string',\n                description: 'Present on Inconvo responses only'\n              },\n              chart: {\n                $ref: '#/$defs/chart'\n              },\n              table: {\n                $ref: '#/$defs/table'\n              }\n            },\n            required: [              'message',\n              'type'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'context',\n        'messages'\n      ]\n    },\n    chart: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              label: {\n                type: 'string'\n              },\n              value: {\n                type: 'number'\n              }\n            },\n            required: [              'label',\n              'value'\n            ]\n          }\n        },\n        type: {\n          type: 'string',\n          enum: [            'line',\n            'bar'\n          ]\n        }\n      },\n      required: [        'data',\n        'type'\n      ]\n    },\n    table: {\n      type: 'object',\n      properties: {\n        body: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          }\n        },\n        head: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'body',\n        'head'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      context: {
        type: 'object',
        properties: {
          '{key}': {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'number',
              },
            ],
            description: 'Filter by arbitrary context key/value.',
          },
        },
      },
      cursor: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Inconvo, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.conversations.list(body)));
};

export default { metadata, tool, handler };
