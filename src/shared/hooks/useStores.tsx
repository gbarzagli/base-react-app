import { useContext } from 'react';
import { StoresContext } from '../contexts/StoresProvider';

export function useStores() {
    return useContext(StoresContext);
}
