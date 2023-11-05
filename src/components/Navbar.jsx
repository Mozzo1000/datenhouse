import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function NavigationMenu() {
    const withouSidebarRoutes = ["/login", "/register", "/verify"];

    const { pathname } = useLocation();
    if (withouSidebarRoutes.some((item) => pathname.includes(item)))
        return null;

    return (
        <Navbar className="border-b border-gray-200">
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-xl font-semibold">
                    Datenhouse
                </span>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link active={location.pathname == "/"}>
                    <Link to="/">Home</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationMenu