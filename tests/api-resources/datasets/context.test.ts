// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inconvo, { toFile } from '@inconvoai/node';

const client = new Inconvo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource context', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.datasets.context.list('org_456', { contextKey: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.datasets.context.list('org_456', { contextKey: 'orgId' });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.datasets.context.delete('shared_data.csv', {
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

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.datasets.context.delete('shared_data.csv', {
      contextKey: 'orgId',
      contextValue: 'org_456',
    });
  });

  // Prism tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.datasets.context.upload('org_456', {
      contextKey: 'orgId',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.datasets.context.upload('org_456', {
      contextKey: 'orgId',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      notes: 'notes',
    });
  });
});
