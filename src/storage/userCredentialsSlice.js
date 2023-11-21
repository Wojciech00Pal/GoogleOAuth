import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: undefined  
}

export const userInfoSlice = createSlice({
    name:"userInfo",
    initialState:initialState,
    reducers:{
        setUserCredentials: (state, action) =>
        {
            state.user = action.payload;
        }
    },
});

export const {setUserCredentials} = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;