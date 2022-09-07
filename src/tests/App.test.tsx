import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, userEvent } from './utils/test-utils';
import App from '../App';

describe('App', () => {
    it('should render two radio buttons, a button and an icon', async () => {
        render(<App />);

        const radioGroup = await screen.findByTestId('IncreaseChooser');
        const countButton = await screen.findByTestId('CountButton');
        const reactIcon = await screen.findByTestId('ReactIcon');

        expect(radioGroup.children).toHaveLength(2);
        expect(countButton).toBeInTheDocument();
        expect(reactIcon).toBeInTheDocument();
    });

    it('should increment count on click', async () => {
        render(<App />);

        const incrementRadio = await screen.findByTestId('IncreaseOne');
        const countButton = await screen.findByTestId('CountButton');

        expect(incrementRadio).toBeChecked();

        expect(await screen.findByText(/count is: 0/i)).toBeInTheDocument();

        userEvent.click(countButton);

        expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
    });

    it('should decrement count on click', async () => {
        render(<App />);

        const decrementRadio = await screen.findByTestId('DecreaseOne');
        const countButton = await screen.findByTestId('CountButton');

        userEvent.click(decrementRadio);

        expect(await screen.findByText(/count is: 0/i)).toBeInTheDocument();

        userEvent.click(countButton);

        expect(await screen.findByText(/count is: -1/i)).toBeInTheDocument();
    });
});
