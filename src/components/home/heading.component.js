import React, { Component } from 'react';
import bgImagePath from '../../assets/images/dark_triangle_pattern_bg.png';
import Radium from 'radium';
import baseStyle from '../../stylesheets/base-style';

//define styles for this component
const styles = {
    heading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundImage: `url(${bgImagePath})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        color: '#ffffff',
        height: '550px', //(base height = 500px) + (navbar height = 50px)
    },
    mainContent: {
        marginBottom: '50px'
    },
    subHeadingNavContainer: {
        width: '100%',
        padding: '10px 20px 10px 0',
        backgroundColor: "rgba(33, 33, 33, .5)",
    },
    subHeadingNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    subHeadingNavItem: {
        cursor: 'pointer',
        marginRight: '20px',
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
                    <h3>Passionate Web/Mobile Developer</h3>
                </div>

                <div style={styles.subHeadingNavContainer}>
                    <div style={styles.subHeadingNav}>
                        {/*GitHub*/}
                        <a style={styles.subHeadingNavItem} key={'github'} href="https://github.com/ThanhxNguyen">
                            <i style={styles.githubIcon} className="fa fa-github-square fa-3x" aria-hidden="true"></i>
                        </a>
                        {/*Linkedin*/}
                        <a style={styles.subHeadingNavItem} key={'linkedin'} href="https://www.linkedin.com/in/thanh-nguyen-78b910126/">
                            <i style={styles.linkedinIcon} className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                        </a>
                        {/*Twitter*/}
                        <a style={styles.subHeadingNavItem} key={'twitter'} href="https://twitter.com/Thanhpn_Nguyen">
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

