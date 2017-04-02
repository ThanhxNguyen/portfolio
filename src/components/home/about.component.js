import React, { Component } from 'react';
import baseStyle from '../../stylesheets/base-style';
import Radium from 'radium';

const styles = {};
    styles.container = {
        ...baseStyle.container,
        padding: '.5em 0 5em 0',
        //mobile portrait (1em = 16px)
        '@media screen and (max-width: 29.999em)': {
            width: '95%',
        }
    }

class About extends Component {

    render() {
        return (
            <div style={styles.container}>
                <h1 className="text-center">About Me</h1>
                <hr/>
                <div>
                    <p className="text-center">A graduate developer from RMIT University with excellent academic results, specializing in web 
                        and mobile development. As a quick learner and passionate developer, I am confident working in 
                        diverse cultures and dynamic environment</p>
                </div>
            </div>
        )
    }//end render
}//end class 

export default Radium(About);