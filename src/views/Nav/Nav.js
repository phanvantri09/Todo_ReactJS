import React from 'react';
import './Nav.scss'
class Nav extends React.Component {
    render () {
        return(
            <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href="/users">User - todo</a>
                <a href="/todo">Todo</a>
            </div>
        )
    }
}

export default Nav;
