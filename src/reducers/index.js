import { combineReducers } from 'redux';
//reducers
import projects from './projects.reducer';
import resume from './resume.reducer';
import transparentNavBg from './transparentNavBg.reducer';

const mainReducer = combineReducers({
    projects: projects,
    resume: resume,
    transparentNavBg: transparentNavBg
});

export default mainReducer;