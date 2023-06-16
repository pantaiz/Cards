import {createSlice} from "@reduxjs/toolkit";
import {
    ArgLoginType,
    ArgRegisterType,
    authApi,
    CreateNewPasswordType,
    ForgotPasswordType,
    ProfileType
} from "./auth.api";
import {createAppAsyncThunk} from "../../common/utils/createAsyncThunk";

const register = createAppAsyncThunk<void, ArgRegisterType>("auth/register", async (arg: ArgRegisterType,) => {
    await authApi.register(arg)
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
("auth/login", async (arg) => {
    const res = await authApi.login(arg)
    return {profile: res.data}
})

const forgotPassword = createAppAsyncThunk<void, ForgotPasswordType>("auth/forgot-password", async (arg) => {
     await authApi.forgotPassword(arg)
})

const createNewPassword = createAppAsyncThunk<{ }, CreateNewPasswordType>
("auth/forgot-password", async (arg) => {
    const res = await authApi.createNewPassword(arg)
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
export const authThunks = {register, login, forgotPassword,createNewPassword}