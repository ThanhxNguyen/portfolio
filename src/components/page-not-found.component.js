import React, { Component } from 'react';
import baseStyle from '../stylesheets/base-style';

export default class PageNotFound extends Component {

    redirectToHome() {
        if(this.props.history) this.props.history.push("/");
    }

    render() {
        return (
            <div style={baseStyle.container}>
                <h1>Page Not Found</h1>
                <hr/>
                <a style={baseStyle.baseBtn} onClick={this.redirectToHome.bind(this)}>Back Home</a>
            </div>
        )
    }
}