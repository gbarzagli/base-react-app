import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import { StoresProvider } from '../../shared/contexts/StoresProvider';

afterEach(() => {
    cleanup();
});

vi.mock('zustand');

const customRender = (ui: React.ReactElement, options = {}) => {
    return render(ui, {
        // wrap provider(s) here if needed
        wrapper: ({ children }) => <StoresProvider>{children}</StoresProvider>,
        ...options,
    });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
