# Conversations

Types:

- <code><a href="./src/resources/conversations/conversations.ts">InconvoConversation</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationCreateResponse</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationListResponse</a></code>

Methods:

- <code title="post /conversations">client.conversations.<a href="./src/resources/conversations/conversations.ts">create</a>({ ...params }) -> ConversationCreateResponse</code>
- <code title="get /conversations/{id}">client.conversations.<a href="./src/resources/conversations/conversations.ts">retrieve</a>(id) -> InconvoConversation</code>
- <code title="get /conversations">client.conversations.<a href="./src/resources/conversations/conversations.ts">list</a>({ ...params }) -> ConversationListResponsesConversationsCursor</code>

## Response

Types:

- <code><a href="./src/resources/conversations/response/response.ts">Chart</a></code>
- <code><a href="./src/resources/conversations/response/response.ts">Table</a></code>
- <code><a href="./src/resources/conversations/response/response.ts">ResponseCreateResponse</a></code>

Methods:

- <code title="post /conversations/{id}/response">client.conversations.response.<a href="./src/resources/conversations/response/response.ts">create</a>(id, { ...params }) -> ResponseCreateResponse</code>

### Feedback

Types:

- <code><a href="./src/resources/conversations/response/feedback.ts">Feedback</a></code>

Methods:

- <code title="post /conversations/{id}/response/{response_id}/feedback">client.conversations.response.feedback.<a href="./src/resources/conversations/response/feedback.ts">create</a>(responseID, { ...params }) -> Feedback</code>
- <code title="patch /conversations/{id}/response/{response_id}/feedback/{feedback_id}">client.conversations.response.feedback.<a href="./src/resources/conversations/response/feedback.ts">update</a>(feedbackID, { ...params }) -> Feedback</code>

# McpServers

## Tenants

Types:

- <code><a href="./src/resources/mcp-servers/tenants.ts">TenantCreateResponse</a></code>

Methods:

- <code title="post /mcpservers/{mcpserver_id}/tenants">client.mcpServers.tenants.<a href="./src/resources/mcp-servers/tenants.ts">create</a>(mcpserverID, { ...params }) -> TenantCreateResponse</code>
- <code title="delete /mcpservers/{mcpserver_id}/tenants/{tenant_key}">client.mcpServers.tenants.<a href="./src/resources/mcp-servers/tenants.ts">delete</a>(mcpserverID, tenantKey) -> void</code>
