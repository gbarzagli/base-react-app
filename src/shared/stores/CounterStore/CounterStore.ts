import create from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import { reducer } from './Reducer';
import { State } from './CounterStore.types';

export const initialState: State = {
    counter: 0,
};

export const useCounterStore = create(devtools(redux(reducer, initialState)));
