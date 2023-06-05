import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "./auth.api";
import {AppDispatch} from "../../app/store";
import {createAppAsyncThunk} from "../../common/utils/createAsyncThunk";

const register = createAppAsyncThunk("auth/register", async (arg: ArgRegisterType, ) => {
    await authApi.register(arg)
})

const login = createAppAsyncThunk <{profile: ProfileType}, ArgLoginType>
("auth/login", async (arg) => {
    const res = await authApi.login(arg)
    return {profile: res.data}
})
const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as ProfileType | null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
    }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = {register, login}