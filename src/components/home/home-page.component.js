import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setHomePage, setNavBarTransparent } from '../../actions/index';

//components
import Heading from './heading.component';
import About from './about.component';

class HomePage extends Component {

    componentDidMount() {
        //set page title
        document.title = "Home";
        //dispatch an action to indicate that navbar background should be transparent
        this.props.setHomePage(true);
        this.props.setNavBarTransparent(true);
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
                    <Heading key={'heading'} />
                    <About key={'about'}/>
                </div>
            </ReactCSSTransitionGroup>
        )
    }//end render

}//end class

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        setHomePage: setHomePage,
        setNavBarTransparent: setNavBarTransparent 
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePage);