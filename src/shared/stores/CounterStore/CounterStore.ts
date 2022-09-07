import create from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import { getInitialState, reducer } from './Reducer';

export const useCounterStore = create(
    devtools(redux(reducer, getInitialState())),
);
