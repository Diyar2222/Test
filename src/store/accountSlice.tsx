import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    loggedIn:boolean
}
const initialState:InitialState = {
    loggedIn:false
}

export const accountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        login:(state)=>{
            state.loggedIn = !state.loggedIn
        }
    }
})
export default accountSlice.reducer
export const accountAction = accountSlice.actions