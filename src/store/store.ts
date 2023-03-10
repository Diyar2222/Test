import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { accountSlice } from "./accountSlice";
import { unistoryApi } from "./unistoryApi";
export const store = configureStore({
    reducer:{
        [unistoryApi.reducerPath]:unistoryApi.reducer,
        login:accountSlice.reducer
    },
    middleware:getDefaultMiddlware => getDefaultMiddlware().concat(unistoryApi.middleware)
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;