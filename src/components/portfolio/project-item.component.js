import React, { Component } from 'react';
import Radium from 'radium';
import baseStyle from '../../stylesheets/base-style';

const styles = {};
styles.projectCard = {
    display: 'flex',
    flexDirection: 'column',
    width: '32%',
    border: '1px solid #E0E0E0',
    borderRadius: '5px',
    overflow: 'hidden',
    paddingBottom: '10px',
    boxShadow: '0 0 5px #E0E0E0',
    backgroundColor: '#FFFFFF',
    marginBottom: '20px'
}
styles.projectCardImageContainer = {
    position: 'relative',
    width: '100%',
    height: '300px'
}
styles.projectCardImage = {
    width: '100%',
    height: '100%',
    zIndex: '-1'
}
styles.projectCardImagePopup = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    color: '#E1E1E1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(33, 33, 33, 0)",
    zIndex: '1',
    opacity: '0',
    ':hover': {
        opacity: '1',
        backgroundColor: "rgba(33, 33, 33, .5)",
        transition: 'all .3s ease-in'
    }
}
styles.projectCardContent = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid #E0E0E0',
    paddingLeft: '10px',
    paddingRight: '10px'
}
styles.projectCardHeading = {
    margin: '0',
    padding: '20px 10px 20px 10px',
    textAlign: 'center'
}
styles.projectCardTags = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flext-start',
    alignItems: 'center'
}
styles.projectCardFooter = {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
}
styles.projectCardLink = {
    ...baseStyle.baseBtn,
}

class ProjectItem extends Component {

    render() {
        return (
            <div style={styles.projectCard}>
                <div style={styles.projectCardImageContainer}>
                    <img className="img-responsive" 
                        style={styles.projectCardImage} 
                        src={require('../../assets/images/'+this.props.project.images[0])} alt="PROJECT"/>
                    <div style={styles.projectCardImagePopup}>
                        <a href=""><h3>Read more</h3></a>
                    </div>
                </div>

                <div style={styles.projectCardContent}>
                    <h3 style={styles.projectCardHeading}>{this.props.project.name}</h3>
                    <p style={styles.projectCardTags}>
                        <em><b>Tags:</b></em>&nbsp;&nbsp;{this.props.project.tags.map(tag => <span key={tag} className="label label-success label-as-badge">{tag}</span>)}
                    </p>
                    <hr/>
                    <h4>Summary</h4>
                    <p>{this.props.project.shortDescription}</p>
                    <hr/>
                    <div style={styles.projectCardFooter}>
                        <a style={styles.projectCardLink} href={this.props.project.githubLink} key={this.props.project.githubLink} className="btn" aria-label="Left Align">
                            Link to GitHub
                        </a>
                    </div>
                </div>
            </div>
        )
    }//end render
}//end class 

//make this component available with Radium
export default Radium(ProjectItem);