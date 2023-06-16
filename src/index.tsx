import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import {Register} from "./features/auth/Register/Register";
import {Login} from "./features/auth/Login/Login";
import {ForgotPassword} from "./features/auth/ForgotPassword/ForgotPassword";
import {CreateNewPassword} from "./features/auth/CreateNewPassword/CreateNewPassword";

const container = document.getElementById('root')!;
const root = createRoot(container);
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
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
            <App/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
