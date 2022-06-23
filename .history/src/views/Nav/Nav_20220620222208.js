import React from "react";
import './Nav.scss'
 class Nav extends React.Component {
    render() {
        return (
            <>
                <div class="topnav">
                    <a class="active" href="/">Home</a>
                    <a href="/Todo">Todos</a>
                    <a href="/About">About</a>
                </div>
            </>
        );
    }
 }
 export default Nav;