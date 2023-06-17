import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateType={
    error:null|string,
    isLoading:boolean,
    isAppInitialized:boolean
}

const slice =createSlice({
    name:'app',
    initialState:{
        error:null as null|string,
        isLoading:true,
        isAppInitialized:false,
    },
    reducers:{
        setIsLoading:(state, action:PayloadAction<{isLoading:boolean}>)=>{
            state.isLoading=action.payload.isLoading
        }
    }
})
export const appReducer =slice.reducer
export const appActions =slice.actions