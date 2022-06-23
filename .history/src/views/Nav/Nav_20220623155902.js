import React from "react";
import './Nav.scss'
import {
  Link,NavLink
  
} from "react-router-dom";
 class Nav extends React.Component {
    render() {
        return (
            <>
                <div class="topnav">
                <NavLink to="/" activeClassName="active" exact>
                    Home
                </NavLink>
                <NavLink to="/Todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink to="/About" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/User" activeClassName="active">
                    User
                </NavLink>
                    
                    
                </div>
            </>
        );
    }
 }
 export default Nav;