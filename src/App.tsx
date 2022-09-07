import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { AppContainer, Button } from './App.styles';
import { ReactComponent as Icon } from './assets/icon.svg';
import { ActionType } from './shared/stores/CounterStore/CounterStore.types';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { useStores } from './shared/hooks/useStores';

const location = new ReactLocation();

function App(): React.ReactElement {
    const [increase, setIncrease] = useState(ActionType.INCREMENT);
    const { useCounterStore } = useStores();
    const { counter, dispatch } = useCounterStore();

    function handleIncreaseChange(event: RadioChangeEvent) {
        setIncrease(event.target.value);
    }

    function handleCountClick() {
        dispatch({ type: increase, payload: 1 });
    }

    return (
        <AppContainer data-testid="App">
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
                <Icon data-testid="ReactIcon" />
                <Outlet />
            </Router>
        </AppContainer>
    );
}

export default App;
