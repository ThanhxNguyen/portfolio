import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProjectList from '../containers/project-list.container';

export default class PortfolioPage extends Component {

    render() {
        return (
            <ReactCSSTransitionGroup 
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false} >
                <div className="container">
                    <ProjectList />
                </div>
            </ReactCSSTransitionGroup>
        )
    }//end render
}