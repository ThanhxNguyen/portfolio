import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import baseStyle, { primaryColorAlpha, textColor } from '../stylesheets/base-style';

const styles = {};
    styles.footer = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: primaryColorAlpha(1),
        color: textColor.whiteInDark,
        padding: '1em 0 0 0',
        left: '0',
        bottom: '0',
        width: '100%'
    }
    styles.icon = {
        marginTop: '0',
        marginRight: '10px',
        marginBottom: '10px',
        marginLeft: '10px',
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
    styles.footerContent = {
        display: 'flex',
        flexDirection: 'row'
    }
    styles.footerNavColumn = {
        flex: '1 0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    // styles.footerSocialBlock = {
    //     border: '1px solid yellow',
    //     flex: '1 0 auto',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }

class Footer extends Component {

    render() {
        return (
            <footer style={styles.footer}>
                <div style={styles.footerContent}>
                    <div style={styles.footerNavColumn}>
                        <h5>Navigation</h5>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                    </div>
                    <div style={styles.footerNavColumn}>
                        <h5>Connect me on</h5>
                        <div>
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
                </div>
                <hr style={ {margin: '.5em 0 0 0', padding: '0'} }/>
                <div  className="text-center"><i>This website is built using ReactJS</i></div>
            </footer>
        )
    }//end render
}//end class

//make this component available with JS in CSS using Radium
export default Radium(Footer);