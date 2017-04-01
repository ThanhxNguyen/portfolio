import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import baseStyle, { primaryColorAlpha, textColor } from '../stylesheets/base-style';

const styles = {};
    styles.footer = {
        backgroundColor: primaryColorAlpha(1),
        color: textColor.whiteInDark,
        padding: '20px',
        left: '0',
        bottom: '0',
        width: '100%'
    }
    styles.phantom = {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%'
    }
    styles.icon = {
        marginTop: '20px',
        marginRight: '20px',
        marginBottom: '20px',
        marginLeft: '20px',
        cursor: 'pointer',
        transition: 'all .25s ease-in',
        ':hover': {
            transform: 'scale(1.2)',
            transition: 'all .25s ease-in'
        }
    }
    styles.githubIcon = {
        ...styles.icon,
        color: baseStyle.secondaryColor.color
    }
    styles.linkedinIcon = {
        //original color
        // color: '#0077B5',
        ...styles.icon,
        color: baseStyle.secondaryColor.color
    }
    styles.twitterIcon = {
        ...styles.icon,
        color: baseStyle.secondaryColor.color
    }
    styles.footerNavColumn = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

class Footer extends Component {

    render() {
        return (
            <div>
                <div style={styles.phantom}></div>
                <footer className="container-fluid" style={styles.footer}>
                    <div className="row">
                        <div className="col-xs-6 text-center">Navigation</div>
                        <div className="col-xs-6 text-center">Connect me on</div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-xs-6" style={styles.footerNavColumn}>
                            <Link to="/">Home</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/resume">Resume</Link>
                        </div>
                        <div className="col-xs-6 text-center">
                            <a href="https://github.com/ThanhxNguyen">
                                <i key={'f-github'} style={styles.githubIcon} className="fa fa-github-square fa-3x" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/thanh-nguyen-78b910126/">
                                <i key={'f-linkedin'} style={styles.linkedinIcon} className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                            </a>
                            <a href="https://twitter.com/Thanhpn_Nguyen">
                                <i key={'f-twitter'} style={styles.twitterIcon} className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }//end render
}//end class

//make this component available with JS in CSS using Radium
export default Radium(Footer);