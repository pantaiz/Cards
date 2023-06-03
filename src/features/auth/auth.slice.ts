import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ArgRegisterType, authApi} from "./auth.api";

const register = createAsyncThunk("auth/register", (arg: ArgRegisterType, thunkAPI) => {
    authApi.register(arg).then((res) => {
        debugger
    })
})

const login = createAsyncThunk("auth/login", (arg:any, thunkAPI) => {
    authApi.login(arg).then(res=>{
debugger
    })
})
const slice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {},
});

export const authReducer = slice.reducer;
export const authThunks = {register,login}