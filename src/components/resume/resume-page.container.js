import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ResumeContent from './resume-content.container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNavBarBackground } from '../../actions/index';

class ResumePage extends Component {

    componentDidMount() {
        //dispatch an action to indicate that navbar background should be transparent
        this.props.setNavBarBackground(false);
    }

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
}//end class 

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setNavBarBackground: setNavBarBackground }, dispatch);
}

export default connect(null, mapDispatchToProps)(ResumePage);