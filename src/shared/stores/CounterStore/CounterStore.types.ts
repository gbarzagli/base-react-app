export enum ActionType {
    INCREMENT = 'Increment',
    DECREMENT = 'Decrement',
    RESET = 'Reset',
}
export type Action =
    | { type: ActionType.INCREMENT | ActionType.DECREMENT; payload: number }
    | { type: ActionType.RESET };
export type State = { counter: number };
