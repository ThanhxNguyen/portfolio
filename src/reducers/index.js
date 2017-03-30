import { combineReducers } from 'redux';
//reducers
import projects from './projects.reducer';
import resume from './resume.reducer';

const mainReducer = combineReducers({
    projects: projects,
    resume: resume
});

export default mainReducer;