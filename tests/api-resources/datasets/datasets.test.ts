// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inconvo, { toFile } from '@inconvoai/node';

const client = new Inconvo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datasets', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.datasets.list({ userIdentifier: 'userIdentifier' });
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
    const response = await client.datasets.list({ userIdentifier: 'userIdentifier' });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.datasets.delete('filename', { userIdentifier: 'userIdentifier' });
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
    const response = await client.datasets.delete('filename', { userIdentifier: 'userIdentifier' });
  });

  // Prism tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.datasets.upload({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      userIdentifier: 'userIdentifier',
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
    const response = await client.datasets.upload({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      userIdentifier: 'userIdentifier',
      notes: 'notes',
    });
  });
});
