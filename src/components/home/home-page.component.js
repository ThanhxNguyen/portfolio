import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//components
import Heading from './heading.component';
import About from './about.component';

export default class HomePage extends Component {

    render() {
        return (
            <ReactCSSTransitionGroup 
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false} >
                <div>
                    <Heading />
                    <About />
                </div>
            </ReactCSSTransitionGroup>
        )
    }//end render

}//end class