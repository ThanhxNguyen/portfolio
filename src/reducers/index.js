import { combineReducers } from 'redux';
//reducers
import projects from './projects.reducer';
import resume from './resume.reducer';
import transparentNavBg from './transparentNavBg.reducer';
import isHomePage from './is-home-page.reducer';

const mainReducer = combineReducers({
    projects: projects,
    resume: resume,
    transparentNavBg: transparentNavBg,
    isHomePage: isHomePage
});

export default mainReducer;