import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//routing
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components 
import NavBar from './navbar.container';
import Footer from './footer.component';
import HomePage from './home/home-page.component';
import PortfolioPage from './portfolio/portfolio-page.container';
import ResumePage from './resume/resume-page.container';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                        
                    {/*render components based on routing*/}
                    <Route key="/" exact path="/" component={HomePage} />
                    <Route key="/projects" path="/projects" component={PortfolioPage} />
                    <Route key="/resume" path="/resume" component={ResumePage} />
                        
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
