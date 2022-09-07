import React from 'react';
import { BaseProps } from '../interfaces/BaseProps';

import Stores from '../stores/index';

export const StoresContext = React.createContext(Stores);

export const StoresProvider = ({ children }: BaseProps) => {
    return (
        <StoresContext.Provider value={Stores}>
            {children}
        </StoresContext.Provider>
    );
};
