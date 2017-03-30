import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ResumeContent from '../containers/resume-content.container';

export default class ResumePage extends Component {

    render() {
        return (
            <ReactCSSTransitionGroup 
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false} >
                <div className="container">
                    ResumePage
                    <ResumeContent />
                </div>
            </ReactCSSTransitionGroup>
        )
    }//end render
}