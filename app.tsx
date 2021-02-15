import React from 'react';
import { Provider } from 'use-http';
import BaseMiddleware from './services/http/middlewares/base';

export default function App() {
    return (
        <Provider
            url='https://jsonplaceholder.typicode.com'
            options={{
                interceptors: { ...BaseMiddleware }
            }}
        >

        </Provider>
    );
