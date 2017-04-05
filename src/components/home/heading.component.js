import React, { Component } from 'react';
import bgImagePath from '../../assets/images/dark_triangle_pattern_bg.png';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import baseStyle, { primaryColorAlpha, textColor, activeDarkAlpha } from '../../stylesheets/base-style';

//define styles for this component
const styles = {
    heading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginTop: '-50px',
        backgroundImage: `url(${bgImagePath})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        color: textColor.white,
        height: '550px', //(base height = 500px) + (navbar height = 50px)
        //mobile portrait (1em = 16px)
        '@media screen and (max-width: 29.999em)': {
            height: '400px'
        }
    },
    headingBtn: {
        padding: '6px 12px',
        border: `1px solid ${textColor.whiteInDark}`,
        borderRadius: '4px',
        margin: '1em .5em 1em 0',
        cursor: 'pointer',
        backgroundColor: activeDarkAlpha(0),
        transition: 'all .1s ease-in',
        ':hover': {
            backgroundColor: activeDarkAlpha(.6),
            transition: 'all .1s ease-in'
        }
    },
    mainContent: {
        marginBottom: '50px',
        //mobile portrait
        '@media screen and (max-width: 29.999em)': {
            textAlign: 'center'
        }
    },
    subHeadingNavContainer: {
        width: '100%',
        padding: '.4em 0 .4em 0',
        backgroundColor: primaryColorAlpha(0.5)
    },
    subHeadingNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0 3em',
        '@media screen and (max-width: 29.999em)': {
            justifyContent: 'center'
        }
    },
    subHeadingNavItem: {
        cursor: 'pointer',
        margin: '0 0.7em',
        transition: 'all 1s ease-in-out',
        ':hover': {
            transform: 'rotate(360deg) scale(1.2)',
            transition: 'all 1s ease-in-out'
        }
    },
    githubIcon: {
        color: baseStyle.secondaryColor.color
    },
    linkedinIcon: {
        //original color
        // color: '#0077B5',
        color: baseStyle.secondaryColor.color
    },
    twitterIcon: {
        color: baseStyle.secondaryColor.color
    }
}

class Heading extends Component {

    render() {
        return (
            <div style={styles.heading}>
                <div style={styles.mainContent}>
                    <h1>I am</h1>
                    <h1>Thanh Nguyen</h1>
                    <h3>A passionate Web/Mobile Developer</h3><br />
                    <div>
                        <span key={'headingBtn-resume'} style={styles.headingBtn}><Link to="/resume">My Resume</Link></span>
                        <span key={'headingBtn-projects'} style={styles.headingBtn}><Link to="/projects">My Projects</Link></span>
                    </div>
                </div>

                <div style={styles.subHeadingNavContainer}>
                    <div style={styles.subHeadingNav}>
                        {/*GitHub*/}
                        <a style={styles.subHeadingNavItem} key={'subHeadingNavItem-github'} href="https://github.com/ThanhxNguyen">
                            <i style={styles.githubIcon} className="fa fa-github-square fa-3x" aria-hidden="true"></i>
                        </a>
                        {/*Linkedin*/}
                        <a style={styles.subHeadingNavItem} key={'subHeadingNavItem-linkedin'} href="https://www.linkedin.com/in/thanh-nguyen-78b910126/">
                            <i style={styles.linkedinIcon} className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                        </a>
                        {/*Twitter*/}
                        <a style={styles.subHeadingNavItem} key={'subHeadingNavItem-twitter'} href="https://twitter.com/Thanhpn_Nguyen">
                            <i style={styles.twitterIcon} className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }//end render

}//end class 

//make this component available with Radium
export default Radium(Heading);

