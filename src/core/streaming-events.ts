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
    type: 'text' | 'chart' | 'table';
    message: string;
  };
}

export type StreamEvent = ResponseCreatedEvent | ResponseAgentStepEvent | ResponseCompletedEvent;
