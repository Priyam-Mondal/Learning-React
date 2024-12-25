import React from "react";

// importing Outlet as named import, so put in {}
import {Outlet} from 'react-router-dom'
import { Header,Footer, User } from "./components";


function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
}

export default Layout;