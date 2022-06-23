import React from "react";
import './Nav.scss'
 class Nav extends React.Component {
    render() {
        return (
            <>
                <div class="topnav">
                    <Link to="/">Home</Link>
                    <Link to="/Todo">Todo</Link>
                    <Link to="/about">About</Link>
                </div>
            </>
        );
    }
 }
 export default Nav;