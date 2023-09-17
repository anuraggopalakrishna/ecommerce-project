import React from "react";
import {Link} from 'react-router-dom'
import { ShoppingCartSimple } from "phosphor-react";
import './navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <Link to="/">Shop</Link>
                <Link to="/cart">
                    <ShoppingCartSimple size={32}/>
                </Link>
            </div>
        </div>
    );
}