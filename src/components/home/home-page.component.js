import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNavBarBackground } from '../../actions/index';

//components
import Heading from './heading.component';
import About from './about.component';

class HomePage extends Component {

    componentDidMount() {
        //dispatch an action to indicate that navbar background should be transparent
        this.props.setNavBarBackground(true);
    }

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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setNavBarBackground: setNavBarBackground }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePage);