import React from 'react';

import { BaseProps } from '../interfaces';
import * as Stores from '../stores';

export const StoresContext = React.createContext(Stores);

export const StoresProvider = ({ children }: BaseProps) => {
    return (
        <StoresContext.Provider value={Stores}>
            {children}
        </StoresContext.Provider>
    );
};
