import React, { Component } from 'react';

//routing
import { NavLink } from 'react-router-dom';

//define styles for this component
const styles = {
    navDark: {
        backgroundColor: "rgba(33, 33, 33, .3)",
        margin: 0
    },
    activeNavLink: {
        backgroundColor: "rgba(33, 33, 33, .5)",   
    }
}

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-fixed-top" style={styles.navDark}>
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact  activeStyle={styles.activeNavLink} to="/">Home</NavLink></li>
                        <li><NavLink activeStyle={styles.activeNavLink} to="/projects">Projects</NavLink></li>
                        <li><NavLink activeStyle={styles.activeNavLink} to="/resume">Resume</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }//end render 

}//end class