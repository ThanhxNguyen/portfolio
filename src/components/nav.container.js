import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNavBarTransparent } from '../actions/index';
import { primaryColorAlpha, activeDarkAlpha } from '../stylesheets/base-style';
import Radium from 'radium';
//routing
import { NavLink } from 'react-router-dom';

//define styles for this component
const styles = {};
    styles.container = {
        width: '100%',
        // height: '4em',
        position: 'fixed',
        zIndex: '9999',
        display: 'flex'
        // paddingLeft: '15em'
    }
    styles.navbar = {
        transition: 'all .3s ease-in',
        flex: '1',
        paddingLeft: '10%',
        display: 'flex',
        justifyContent: 'flex-start',
        //mobile portrait
        '@media screen and (max-width: 29.999em)': {
            justifyContent: 'center',
            paddingLeft: '0'
        }
    }
    styles.navDarkTransparent = {
        // ...styles.container,
        ...styles.navbar,
        backgroundColor: primaryColorAlpha(0.5)
    }
    styles.navDark = {
        ...styles.container,
        ...styles.navbar,
        backgroundColor: primaryColorAlpha(1)
    }
    styles.navLink = {
        padding: '1em'
    }
    styles.activeNavLink = {
        backgroundColor: activeDarkAlpha(0.6),   
        
    }

class NavBar extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler.bind(this));
    }

    render() {
        return (
            <nav style={styles.container}>
                <div style={this.props.transparentNavBg ? styles.navDarkTransparent : styles.navDark}>
                    <NavLink style={styles.navLink} exact strict activeStyle={styles.activeNavLink} to="/">Home</NavLink>
                    <NavLink style={styles.navLink} activeStyle={styles.activeNavLink} to="/projects">Projects</NavLink>
                    <NavLink style={styles.navLink} activeStyle={styles.activeNavLink} to="/resume">Resume</NavLink>
                </div>
            </nav>
        )
    }//end render 

    scrollHandler(e) {
        //only trigger this event handler if the current page is home page. Otherwise, ignore
        if(this.props.isHomePage) {
            //get the vertical scroll position
            let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            //if the user is at top of the page, set navbar transparent to true. Otherwise, set it to false
            if(scrollPosition === 0) {
                this.props.setNavBarTransparent(true);
            } else if(scrollPosition > 0) {
                this.props.setNavBarTransparent(false);
            }
        }
    }

}//end class

function mapStateToProps(state) {
    return {
        transparentNavBg: state.transparentNavBg,
        isHomePage: state.isHomePage
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setNavBarTransparent: setNavBarTransparent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Radium(NavBar));