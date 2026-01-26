// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inconvo from '@inconvoai/node';

const client = new Inconvo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedback', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.agents.conversations.response.feedback.create('response_id', {
      agentId: 'agentId',
      id: 'id',
      rating: 'positive',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.agents.conversations.response.feedback.create('response_id', {
      agentId: 'agentId',
      id: 'id',
      rating: 'positive',
      comment: 'comment',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agents.conversations.response.feedback.update('feedback_id', {
      agentId: 'agentId',
      id: 'id',
      response_id: 'response_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.agents.conversations.response.feedback.update('feedback_id', {
      agentId: 'agentId',
      id: 'id',
      response_id: 'response_id',
      comment: 'comment',
      rating: 'positive',
    });
  });
});
