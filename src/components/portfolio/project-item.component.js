import React, { Component } from 'react';

export default class ProjectItem extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.project.name}</h3>
            </div>
        )
    }//end render
}