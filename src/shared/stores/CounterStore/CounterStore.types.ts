export enum ActionType {
    INCREMENT = 'Increment',
    DECREMENT = 'Decrement',
}
export type Action = { type: ActionType; payload: number };
export type State = { counter: number };
