import React, { Component } from 'react';
import { connect } from 'react-redux';

//routing
import { NavLink } from 'react-router-dom';

//define styles for this component
const styles = {
    navDarkTransparent: {
        backgroundColor: "rgba(33, 33, 33, .3)",
        margin: 0
    },
    navDark: {
        backgroundColor: "rgba(33, 33, 33, 1)",
        margin: 0
    },
    activeNavLink: {
        backgroundColor: "rgba(66, 66, 66, 1)",   
    }
}

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-fixed-top" style={this.props.transparentNavBg ? styles.navDarkTransparent : styles.navDark}>
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact  activeStyle={styles.activeNavLink} to="/">Home</NavLink></li>
                        <li><NavLink exact activeStyle={styles.activeNavLink} to="/projects">Projects</NavLink></li>
                        <li><NavLink exact activeStyle={styles.activeNavLink} to="/resume">Resume</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }//end render 

}//end class

function mapStateToProps(state) {
    return {
        transparentNavBg: state.transparentNavBg
    }
}

export default connect(mapStateToProps)(NavBar);