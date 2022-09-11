import { describe, expect, it } from 'vitest';
import { ActionType } from '../CounterStore.types';
import { reducer } from '../Reducer';

describe('CounterStore Reducer', () => {
    const oldState = { counter: 0 };

    it('should return the counter plus one', () => {
        const newState = reducer(oldState, {
            type: ActionType.INCREMENT,
            payload: 1,
        });
        expect(newState).not.toBe(oldState);
        expect(newState.counter).toBe(1);
    });
    it('should return the counter minus one', () => {
        const newState = reducer(oldState, {
            type: ActionType.DECREMENT,
            payload: 1,
        });
        expect(newState).not.toBe(oldState);
        expect(newState.counter).toBe(-1);
    });
    it('should reset the counter', () => {
        oldState.counter = 1;
        const newState = reducer(oldState, { type: ActionType.RESET });
        expect(newState).not.toBe(oldState);
        expect(newState.counter).toBe(0);
    });
    it('should return the same state', () => {
        const newState = reducer(oldState, {
            type: 'unknown action' as ActionType,
            payload: 1,
        });
        expect(newState).toBe(oldState);
    });
});
