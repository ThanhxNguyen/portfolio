import React, { Component } from 'react';

export default class About extends Component {

    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">About Me</h1>
                <hr/>
                <div className="col-md-8 col-md-offset-2">
                    <p className="text-center">A graduate developer from RMIT University with excellent academic results, specializing in web 
                        and mobile development. As a quick learner and passionate developer, I am confident working in 
                        diverse cultures and dynamic environment</p>
                </div>
            </div>
        )
    }//end render
}