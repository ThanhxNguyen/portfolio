import React, { Component } from 'react';
import { connect } from 'react-redux';
//components 
import ProjectItem from '../portfolio/project-item.component';

const styles = {};
styles.projectListContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'    
}

class ProjectList extends Component {

    render() {
        if(!this.props.projects) return <div>No projects available</div>
        return (
            <div style={styles.projectListContainer}>{this.renderProjectList(this.props.projects)}</div>
        )
    }//end render

    renderProjectList(projects) {
        return projects.map( project => <ProjectItem key={project.id} project={project} /> );
    }

}//end class 

//mapping redux state to component prop name 'projects'
function mapStateToProps(state) {
    return {
        projects: state.projects
    }
}

//make this container available
export default connect(mapStateToProps)(ProjectList);
