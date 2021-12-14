import {StatusBar} from 'expo-status-bar';
import React from 'react';
import Routes from '../src/routes';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar style={"light"} backgroundColor={"#312e38"}/>
            <Routes/>
        </Provider>
    )
}
