import AuthMiddleware from './auth';
import LoggerMiddleware from './logger';
import { applyQueueInSequence } from 'utils/promises';

export default {
    // every time we make an http request, this will run 1st before the request is made
    // url, path and route are supplied to the interceptor
    // request options can be modified and must be returned
    request: async ({ options, url, path, route }: any) => {
        const state = await applyQueueInSequence({ options, url, path, route }, [
            AuthMiddleware.request,
            LoggerMiddleware.request
        ]);

        return state.options;
    },
    // every time we make an http request, before getting the response back, this will run
    response: async ({ response }: any) => {
        const state = await applyQueueInSequence({ response }, [
            LoggerMiddleware.response
        ]);

        return state.response;
    }
}