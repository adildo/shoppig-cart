import React from "react";
import { Link } from 'react-router-dom'

function Nav ({shoppingCart}) {
    return (
        <nav>
        
            <h3>Logo</h3>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart {`(${shoppingCart.length})`}</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;