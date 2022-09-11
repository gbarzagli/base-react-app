import { Action, ActionType, State } from './CounterStore.types';

export const getInitialState = () => ({
    counter: 0,
});

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ActionType.INCREMENT:
            return { counter: state.counter + action.payload };
        case ActionType.DECREMENT:
            return { counter: state.counter - action.payload };
        case ActionType.RESET:
            return getInitialState();
        default:
            return state;
    }
}
