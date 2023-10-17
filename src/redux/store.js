import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { DestinationApi } from "../api/DestinationApi";

export const store = configureStore({
    reducer: {
        //because we're working with RTK query, DestinationApi's reducer created automatically
        //"apidestination": DestinationApi.reducer - but we dont want magic strings
        [DestinationApi.reducerPath]: DestinationApi.reducer 
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(DestinationApi.middleware)
})