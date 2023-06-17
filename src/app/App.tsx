import {useAppDispatch, useAppSelector} from "./hooks";
import React from "react";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Login} from "../features/auth/Login/Login";
import {Profile} from "../features/Profile/Profile";
import {Register} from "../features/auth/Register/Register";
import {ForgotPassword} from "../features/auth/ForgotPassword/ForgotPassword";
import {CreateNewPassword} from "../features/auth/CreateNewPassword/CreateNewPassword";
import {store} from "./store";

import {createTheme, ThemeProvider} from "@mui/material";
import { Provider } from "react-redux";

function App() {

    const router = createHashRouter([
        {
            path: "/",
            element: <div>Hello world!</div>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/profile",
            element: <Profile/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/forgot-password",
            element: <ForgotPassword/>
        },
        {
            path: "/set-new-password/:tokens",
            element: <CreateNewPassword/>
        },
        {
            path: "/packs",
            element: <h1>Packs</h1>
        },
    ])
    const theme = createTheme()
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;