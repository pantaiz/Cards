import React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {BrowserRouter, Link} from "react-router-dom";


export const NavbarHeader: React.FC = () => {


    return (
        <BrowserRouter basename="/my-app">
            <AppBar position="static">
                <Toolbar>
                    <div style={{flexGrow: 1}}>
                        {/* здесь может быть логотип или другие элементы */}
                    </div>
                    <Link to='/profile-page'>
                        Sign In
                    </Link>
                </Toolbar>
            </AppBar>
        </BrowserRouter>
    );
};
