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
- <code><a href="./src/resources/conversations/response/response.ts">ResponseRetrieveResponse</a></code>

Methods:

- <code title="post /conversations/{id}/response">client.conversations.response.<a href="./src/resources/conversations/response/response.ts">create</a>(id, { ...params }) -> ResponseCreateResponse</code>
- <code title="get /conversations/{conversation_id}/response/{response_id}">client.conversations.response.<a href="./src/resources/conversations/response/response.ts">retrieve</a>(responseID, { ...params }) -> ResponseRetrieveResponse</code>

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
- <code title="delete /mcpservers/{mcpserver_id}/tenants/{tenant_key}">client.mcpServers.tenants.<a href="./src/resources/mcp-servers/tenants.ts">delete</a>(mcpserverID, { ...params }) -> void</code>

# Agents

## DataSummary

Types:

- <code><a href="./src/resources/agents/data-summary.ts">DataSummaryRetrieveResponse</a></code>

Methods:

- <code title="get /agents/{agentId}/data-summary">client.agents.dataSummary.<a href="./src/resources/agents/data-summary.ts">retrieve</a>(agentID) -> DataSummaryRetrieveResponse</code>

# Datasets

## User

Types:

- <code><a href="./src/resources/datasets/user.ts">UserListResponse</a></code>
- <code><a href="./src/resources/datasets/user.ts">UserDeleteResponse</a></code>
- <code><a href="./src/resources/datasets/user.ts">UserUploadResponse</a></code>

Methods:

- <code title="get /datasets/user/{userIdentifier}">client.datasets.user.<a href="./src/resources/datasets/user.ts">list</a>(userIdentifier) -> UserListResponse</code>
- <code title="delete /datasets/user/{userIdentifier}/{filename}">client.datasets.user.<a href="./src/resources/datasets/user.ts">delete</a>(filename, { ...params }) -> UserDeleteResponse</code>
- <code title="post /datasets/user/{userIdentifier}">client.datasets.user.<a href="./src/resources/datasets/user.ts">upload</a>(userIdentifier, { ...params }) -> UserUploadResponse</code>

## Context

Types:

- <code><a href="./src/resources/datasets/context.ts">ContextListResponse</a></code>
- <code><a href="./src/resources/datasets/context.ts">ContextDeleteResponse</a></code>
- <code><a href="./src/resources/datasets/context.ts">ContextUploadResponse</a></code>

Methods:

- <code title="get /datasets/context/{contextKey}/{contextValue}">client.datasets.context.<a href="./src/resources/datasets/context.ts">list</a>(contextValue, { ...params }) -> ContextListResponse</code>
- <code title="delete /datasets/context/{contextKey}/{contextValue}/{filename}">client.datasets.context.<a href="./src/resources/datasets/context.ts">delete</a>(filename, { ...params }) -> ContextDeleteResponse</code>
- <code title="post /datasets/context/{contextKey}/{contextValue}">client.datasets.context.<a href="./src/resources/datasets/context.ts">upload</a>(contextValue, { ...params }) -> ContextUploadResponse</code>
