import {createAsyncThunk} from "@reduxjs/toolkit";
import {ArgLoginType, ProfileType} from "../../features/auth/auth.api";
import {AppDispatch} from "../../app/store";

export const createAppAsyncThunk=createAsyncThunk.withTypes <{
    state:unknown,
    dispatch:AppDispatch,
    rejectValue:unknown
}>()