# Agents

## DataSummary

Types:

- <code><a href="./src/resources/agents/data-summary.ts">DataSummaryRetrieveResponse</a></code>

Methods:

- <code title="get /agents/{agentId}/data-summary">client.agents.dataSummary.<a href="./src/resources/agents/data-summary.ts">retrieve</a>(agentID) -> DataSummaryRetrieveResponse</code>

## Conversations

Types:

- <code><a href="./src/resources/agents/conversations/conversations.ts">InconvoConversation</a></code>
- <code><a href="./src/resources/agents/conversations/conversations.ts">ConversationCreateResponse</a></code>
- <code><a href="./src/resources/agents/conversations/conversations.ts">ConversationListResponse</a></code>

Methods:

- <code title="post /agents/{agentId}/conversations">client.agents.conversations.<a href="./src/resources/agents/conversations/conversations.ts">create</a>(agentID, { ...params }) -> ConversationCreateResponse</code>
- <code title="get /agents/{agentId}/conversations/{conversation_id}">client.agents.conversations.<a href="./src/resources/agents/conversations/conversations.ts">retrieve</a>(conversationID, { ...params }) -> InconvoConversation</code>
- <code title="get /agents/{agentId}/conversations">client.agents.conversations.<a href="./src/resources/agents/conversations/conversations.ts">list</a>(agentID, { ...params }) -> ConversationListResponsesConversationsCursor</code>

### Response

Types:

- <code><a href="./src/resources/agents/conversations/response/response.ts">Chart</a></code>
- <code><a href="./src/resources/agents/conversations/response/response.ts">Table</a></code>
- <code><a href="./src/resources/agents/conversations/response/response.ts">ResponseCreateResponse</a></code>
- <code><a href="./src/resources/agents/conversations/response/response.ts">ResponseRetrieveResponse</a></code>

Methods:

- <code title="post /agents/{agentId}/conversations/{conversation_id}/response">client.agents.conversations.response.<a href="./src/resources/agents/conversations/response/response.ts">create</a>(conversationID, { ...params }) -> ResponseCreateResponse</code>
- <code title="get /agents/{agentId}/conversations/{conversation_id}/response/{response_id}">client.agents.conversations.response.<a href="./src/resources/agents/conversations/response/response.ts">retrieve</a>(responseID, { ...params }) -> ResponseRetrieveResponse</code>

#### Feedback

Types:

- <code><a href="./src/resources/agents/conversations/response/feedback.ts">Feedback</a></code>

Methods:

- <code title="post /agents/{agentId}/conversations/{conversation_id}/response/{response_id}/feedback">client.agents.conversations.response.feedback.<a href="./src/resources/agents/conversations/response/feedback.ts">create</a>(responseID, { ...params }) -> Feedback</code>
- <code title="patch /agents/{agentId}/conversations/{conversation_id}/response/{response_id}/feedback/{feedback_id}">client.agents.conversations.response.feedback.<a href="./src/resources/agents/conversations/response/feedback.ts">update</a>(feedbackID, { ...params }) -> Feedback</code>

## Datasets

### User

Types:

- <code><a href="./src/resources/agents/datasets/user.ts">UserListResponse</a></code>
- <code><a href="./src/resources/agents/datasets/user.ts">UserDeleteResponse</a></code>
- <code><a href="./src/resources/agents/datasets/user.ts">UserUploadResponse</a></code>

Methods:

- <code title="get /agents/{agentId}/datasets/user/{userIdentifier}">client.agents.datasets.user.<a href="./src/resources/agents/datasets/user.ts">list</a>(userIdentifier, { ...params }) -> UserListResponse</code>
- <code title="delete /agents/{agentId}/datasets/user/{userIdentifier}/{filename}">client.agents.datasets.user.<a href="./src/resources/agents/datasets/user.ts">delete</a>(filename, { ...params }) -> UserDeleteResponse</code>
- <code title="post /agents/{agentId}/datasets/user/{userIdentifier}">client.agents.datasets.user.<a href="./src/resources/agents/datasets/user.ts">upload</a>(userIdentifier, { ...params }) -> UserUploadResponse</code>

### Context

Types:

- <code><a href="./src/resources/agents/datasets/context.ts">ContextListResponse</a></code>
- <code><a href="./src/resources/agents/datasets/context.ts">ContextDeleteResponse</a></code>
- <code><a href="./src/resources/agents/datasets/context.ts">ContextUploadResponse</a></code>

Methods:

- <code title="get /agents/{agentId}/datasets/context/{contextKey}/{contextValue}">client.agents.datasets.context.<a href="./src/resources/agents/datasets/context.ts">list</a>(contextValue, { ...params }) -> ContextListResponse</code>
- <code title="delete /agents/{agentId}/datasets/context/{contextKey}/{contextValue}/{filename}">client.agents.datasets.context.<a href="./src/resources/agents/datasets/context.ts">delete</a>(filename, { ...params }) -> ContextDeleteResponse</code>
- <code title="post /agents/{agentId}/datasets/context/{contextKey}/{contextValue}">client.agents.datasets.context.<a href="./src/resources/agents/datasets/context.ts">upload</a>(contextValue, { ...params }) -> ContextUploadResponse</code>

## McpServers

### Tenants

Types:

- <code><a href="./src/resources/agents/mcp-servers/tenants.ts">TenantCreateResponse</a></code>
- <code><a href="./src/resources/agents/mcp-servers/tenants.ts">TenantDeleteResponse</a></code>

Methods:

- <code title="post /agents/{agentId}/mcpservers/{mcpserver_id}/tenants">client.agents.mcpServers.tenants.<a href="./src/resources/agents/mcp-servers/tenants.ts">create</a>(mcpserverID, { ...params }) -> TenantCreateResponse</code>
- <code title="delete /agents/{agentId}/mcpservers/{mcpserver_id}/tenants/{tenant_key}">client.agents.mcpServers.tenants.<a href="./src/resources/agents/mcp-servers/tenants.ts">delete</a>(mcpserverID, { ...params }) -> TenantDeleteResponse</code>
