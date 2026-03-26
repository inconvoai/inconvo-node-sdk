// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inconvo, { toFile } from '@inconvoai/node';

const client = new Inconvo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource context', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.agents.datasets.context.list('org_456', {
      agentId: 'agentId',
      contextKey: 'orgId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.agents.datasets.context.list('org_456', {
      agentId: 'agentId',
      contextKey: 'orgId',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agents.datasets.context.delete('shared_data.csv', {
      agentId: 'agentId',
      contextKey: 'orgId',
      contextValue: 'org_456',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.agents.datasets.context.delete('shared_data.csv', {
      agentId: 'agentId',
      contextKey: 'orgId',
      contextValue: 'org_456',
    });
  });

  // Mock server tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.agents.datasets.context.upload('org_456', {
      agentId: 'agentId',
      contextKey: 'orgId',
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upload: required and optional params', async () => {
    const response = await client.agents.datasets.context.upload('org_456', {
      agentId: 'agentId',
      contextKey: 'orgId',
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      notes: 'notes',
    });
  });
});
