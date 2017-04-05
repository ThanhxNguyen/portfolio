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
    styles.content = {
        textAlign: 'center',
        fontSize: '1.3em',
        //mobile portrait (1em = 16px)
        '@media screen and (max-width: 29.999em)': {
            fontSize: '1em'
        }
    }

class About extends Component {

    render() {
        return (
            <div style={styles.container}>
                <h1 className="text-center">About Me</h1>
                <hr/>
                <div style={styles.content}>
                    <p>I am a recent graduate from RMIT University with high academic results, 
                        major in web and mobile development. My passion for programming started when the first time I accidentally 
                        visited <a href="https://www.w3schools.com/" style={{color: '#4CAF50'}}>w3schools.com</a> while googling. I still remember the thrill I 
                        got when I created my first ever “Hello World” HTML page and successfully run it on the web browser.</p>
                    <p>After that moment, I decided to start my journey into the programming world. During my past three years at RMIT, 
                        I have used my time wisely to learn and strengthen my skills. I also managed to apply my knowledge to create a few side projects including 
                        web apps and Android apps.</p>
                    <p>I am currently looking for a great place to start my journey, the place where I can utilise 
                        my skills to contribute to and learn from. I am confident that I will be a good addition to your organisation. 
                        If you are interested in hiring me, please contact me via email <b><em>thanhpn.nguyen@gmail.com</em></b>.</p>
                </div>
            </div>
        )
    }//end render
}//end class 

export default Radium(About);