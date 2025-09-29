// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Inconvo from '@inconvoai/node';

const client = new Inconvo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mcpServers', () => {
  // Prism tests are disabled
  test.skip('deleteTenant: only required params', async () => {
    const responsePromise = client.mcpServers.deleteTenant('tenant_key', { mcpserver_id: 'mcpserver_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteTenant: required and optional params', async () => {
    const response = await client.mcpServers.deleteTenant('tenant_key', { mcpserver_id: 'mcpserver_id' });
  });

  // Prism tests are disabled
  test.skip('upsertTenants: only required params', async () => {
    const responsePromise = client.mcpServers.upsertTenants('mcpserver_id', {
      tenants_upsert_request: { 'fromapi@api.com': { organisationId: 1 } },
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
  test.skip('upsertTenants: required and optional params', async () => {
    const response = await client.mcpServers.upsertTenants('mcpserver_id', {
      tenants_upsert_request: { 'fromapi@api.com': { organisationId: 1 } },
    });
  });
});
