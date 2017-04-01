import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {};
styles.marginBottom = {
    marginBottom: '1.4em'
}

class ResumeContent extends Component {

    render() {
        if(!this.props.resume) return <div>No Content Available</div>

        return (
            <div>
                <h3>Profile</h3>
                <p>{this.props.resume.personalStatement}</p>
                <hr/>
                <h3>Education</h3>
                {this.renderEducationList(this.props.resume.educations)}
                <hr/>
                <h3>Skills</h3>
                {this.renderSkillList(this.props.resume.skills)}
                <hr/>
                <h3>Experience</h3>
                {this.renderExperienceList(this.props.resume.experience)}
                <hr/>
                <h3>Interest</h3>
                <p>{this.props.resume.interest}</p>
            </div>
        )
    }//end render

    renderEducationList(educations) {
        return educations.map(education => {
            return (
                <div style={styles.marginBottom}>
                    <h4>{education.qualification}</h4>
                    <h5>{education.school} | {education.startYear} - {education.endYear}</h5>
                    <h5>Achievement</h5>
                        <ul>
                            {education.achievement.map(item => <li>{item}</li>)}
                        </ul>
                </div>
            )
        })
    }//end renderEducationList

    renderSkillList(skillList) {
        return (
            <ul>
                {skillList.map(skill => <li>{skill}</li>)}
            </ul>
        )
    }//end renderSkillList

    renderExperienceList(experienceList) {
        return experienceList.map(experience => {
            return (
                <div style={styles.marginBottom}>
                    <h4>{experience.title}</h4>
                    <h5>{experience.role} <i>at</i> {experience.location} | {experience.startDate} - {experience.endDate}</h5>
                    <h5>Responsibilities</h5>
                        <ul>
                            {experience.responsibilities.map(item => <li>{item}</li>)}
                        </ul>
                    <h5>Achievements</h5>
                        <ul>
                            {experience.achievements.map(item => <li>{item}</li>)}
                        </ul>
                </div>
            )
        })
    }

}//end class

function mapStateToProps(state) {
    return {
        resume: state.resume
    }
}

export default connect(mapStateToProps)(ResumeContent);