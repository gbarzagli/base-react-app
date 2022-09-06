import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { AppContainer, Button } from './App.styles';
import { ReactComponent as Icon } from './assets/icon.svg';
import { useCounterStore } from './shared/stores/CounterStore';
import { ActionType } from './shared/stores/CounterStore/CounterStore.types';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const location = new ReactLocation();
const queryClient = new QueryClient();

function App(): React.ReactElement {
    const [increase, setIncrease] = useState(ActionType.INCREMENT);
    const { counter, dispatch } = useCounterStore();

    function handleIncreaseChange(event: RadioChangeEvent) {
        setIncrease(event.target.value);
    }

    function handleCountClick() {
        dispatch({ type: increase, payload: 1 });
    }

    return (
        <AppContainer data-testid="App">
            <QueryClientProvider client={queryClient}>
                <Router location={location} routes={[]}>
                    <Radio.Group
                        data-testid="IncreaseChooser"
                        value={increase}
                        onChange={handleIncreaseChange}
                    >
                        <Radio
                            value={ActionType.INCREMENT}
                            data-testid="IncreaseOne"
                        >
                            Increase 1
                        </Radio>
                        <Radio
                            value={ActionType.DECREMENT}
                            data-testid="DecreaseOne"
                        >
                            Decrease 1
                        </Radio>
                    </Radio.Group>
                    <Button
                        type="primary"
                        data-testid="CountButton"
                        onClick={handleCountClick}
                    >
                        count is: {counter}
                    </Button>
                    <Icon />
                    <Outlet />
                </Router>
            </QueryClientProvider>
        </AppContainer>
    );
}

export default App;
