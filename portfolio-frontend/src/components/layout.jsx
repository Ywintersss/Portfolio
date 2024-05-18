import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
import Sidebar from "./sidebar/sidebar.jsx";

export default function Layout() {
    // parent route wraps child routes
    return (
        <>
            <Header />
            <Sidebar />
            <main>
                {/* Outlet is used to render child route components when the corresponding url is matched. */}
                <Outlet />  
            </main>
            <Footer />
        </>
    )
}