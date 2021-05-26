import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';
export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">Sandwiches</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}
