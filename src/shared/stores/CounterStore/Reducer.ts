import { Action, ActionType, State } from './CounterStore.types';

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ActionType.INCREMENT:
            return { counter: state.counter + action.payload };
        case ActionType.DECREMENT:
            return { counter: state.counter - action.payload };
        default:
            throw Error('Unknowm operation');
    }
}
