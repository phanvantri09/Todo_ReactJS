import React from 'react';
import './Nav.scss'
import {
    NavLink,
    Link
  } from "react-router-dom";
class Nav extends React.Component {
    render () {
        return(
            // should use navlink, because navlink support an function as: active class, exact sẻ chỉ load page / khi đúng thôi tránh việc trùng với namepage khác
            <div class="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/users" activeClassName="active" >Users</NavLink>
                <NavLink to="/todo" activeClassName="active" >todo</NavLink>

            </div>
        )
    }
}

export default Nav;
