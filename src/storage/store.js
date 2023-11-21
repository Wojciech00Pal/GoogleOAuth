import {configureStore} from '@reduxjs/toolkit'; 
import { userInfoReducer } from "./userCredentialsSlice";

const store = configureStore({
    reducer:{
        userInfoStore: userInfoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
     .concat()
})

//export type RootState = ReturnType<typeof store.getState>;

export default store;