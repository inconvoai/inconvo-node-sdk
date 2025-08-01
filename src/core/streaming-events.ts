export type StreamEventType = 'response.created' | 'response.agent_step' | 'response.completed';

export interface BaseStreamEvent {
  type: StreamEventType;
  id: string;
}

export interface ResponseCreatedEvent extends BaseStreamEvent {
  type: 'response.created';
}

export interface ResponseAgentStepEvent extends BaseStreamEvent {
  type: 'response.agent_step';
  step: string;
  message: string;
}

export interface ResponseCompletedEvent extends BaseStreamEvent {
  type: 'response.completed';
  response: {
    id: string;
    conversationId: string;
    message: string;
    type: 'text' | 'chart' | 'table';
    chart?: {
      type: 'line' | 'bar';
      data: {
        label: string;
        value: number;
      }[];
    };
    table?: {
      head: string[];
      body: string[][];
    };
  };
}

export type StreamEvent = ResponseCreatedEvent | ResponseAgentStepEvent | ResponseCompletedEvent;
