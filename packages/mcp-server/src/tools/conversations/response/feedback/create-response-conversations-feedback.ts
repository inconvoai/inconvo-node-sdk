// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'inconvo-mcp/filtering';
import { Metadata, asTextContentResult } from 'inconvo-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Inconvo from 'inconvo';

export const metadata: Metadata = {
  resource: 'conversations.response.feedback',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/conversations/{id}/response/{response_id}/feedback',
};

export const tool: Tool = {
  name: 'create_response_conversations_feedback',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate feedback\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/feedback',\n  $defs: {\n    feedback: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        rating: {\n          type: 'string',\n          enum: [            'positive',\n            'negative'\n          ]\n        },\n        comment: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'rating'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      response_id: {
        type: 'string',
      },
      rating: {
        type: 'string',
        enum: ['positive', 'negative'],
      },
      comment: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'response_id', 'rating'],
  },
  annotations: {},
};

export const handler = async (client: Inconvo, args: Record<string, unknown> | undefined) => {
  const { response_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.conversations.response.feedback.create(response_id, body)),
  );
};

export default { metadata, tool, handler };
