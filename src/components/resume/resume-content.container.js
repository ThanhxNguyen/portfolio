import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResumeContent extends Component {

    render() {
        if(!this.props.resume) return <div>No Content Available</div>

        return (
            <div>{this.props.resume.personalStatement}</div>
        )
    }//end render

}//end class

function mapStateToProps(state) {
    return {
        resume: state.resume
    }
}

export default connect(mapStateToProps)(ResumeContent);