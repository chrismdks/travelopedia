import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { destinationApi } from "../api/destinationApi";
import { randomDestinationApi } from "../api/randomDestinationApi";

export const store = configureStore({
    reducer: {
        //because we're working with RTK query, DestinationApi's reducer created automatically
        //"apidestination": DestinationApi.reducer - but we dont want magic strings
        [destinationApi.reducerPath]: destinationApi.reducer,
        [randomDestinationApi.reducerPath]: randomDestinationApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware()
        .concat(destinationApi.middleware)
        .concat(randomDestinationApi.middleware)
})