import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const register=createAsyncThunk()

const slice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {},
});

export const authReducer = slice.reducer;