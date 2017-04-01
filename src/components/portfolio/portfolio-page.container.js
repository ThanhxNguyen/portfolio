import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNavBarBackground } from '../../actions/index';
import ProjectList from './project-list.container';

const styles = {};

styles.container = {
    paddingTop: '100px',
    width: '80%',
    margin: 'auto',
    marginBottom: '100px'
}

class PortfolioPage extends Component {

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
                <div style={styles.container}>
                    <h1>PortfolioPage</h1>
                    <hr/>
                    <ProjectList/>
                </div>
            </ReactCSSTransitionGroup>
        )
    }//end render
}//end class 

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setNavBarBackground: setNavBarBackground }, dispatch);
}

export default connect(null, mapDispatchToProps)(PortfolioPage);