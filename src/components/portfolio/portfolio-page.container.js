import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setHomePage, setNavBarTransparent } from '../../actions/index';
import ProjectList from './project-list.container';
import baseStyle from '../../stylesheets/base-style';
import Radium from 'radium';

const styles = {};

styles.container = {
    ...baseStyle.container,
    //mobile portrait (1em = 16px)
    '@media screen and (max-width: 29.999em)': {
        width: '95%',
    },
    // landscape phone and portrait tablet (1em = 16px)
    '@media screen and (min-width: 30em) and (max-width: 59.9999em)' : {
        width: '95%'
    }
}

class PortfolioPage extends Component {

    componentDidMount() {
        //set page title
        document.title = "Projects";
        //dispatch an action to indicate that navbar background should be transparent
        this.props.setHomePage(false);
        this.props.setNavBarTransparent(false);
    }

    render() {
        return (
            <ReactCSSTransitionGroup 
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false} >
                <div style={styles.container}>
                    <h1>Side Projects</h1>
                    <hr/>
                    <ProjectList/>
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

export default connect(null, mapDispatchToProps)(Radium(PortfolioPage));