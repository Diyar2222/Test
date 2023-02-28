import { configureStore } from "@reduxjs/toolkit";
import { unistoryApi } from "./unistoryApi";

export const store = configureStore({
    reducer:{
        [unistoryApi.reducerPath]:unistoryApi.reducer
    },
    middleware:getDefaultMiddlware => getDefaultMiddlware().concat(unistoryApi.middleware)
})