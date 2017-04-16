import React, { Component } from 'react';
import { StyleRoot } from 'radium';
//routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components 
import Nav from './nav.container';
import Footer from './footer.component';
import HomePage from './home/home-page.component';
import PortfolioPage from './portfolio/portfolio-page.container';
import ResumePage from './resume/resume-page.container';
import PageNotFound from './page-not-found.component';

const styles = {};
    styles.wrapper = {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    }
    styles.main = {
        flex: '1 0 auto'
    }

class App extends Component {
    render() {
        return (
            <StyleRoot>
                <Router>
                    <div style={styles.wrapper}>
                        <div style={styles.main}>
                            <Nav/> 
                            <Switch>
                                {/*render components based on routing*/}
                                <Route key="/" exact strict path="/" component={HomePage} />
                                <Route key="/projects" path="/projects" component={PortfolioPage} />
                                <Route key="/resume" path="/resume" component={ResumePage} />
                                <Route key="/notFound" component={PageNotFound} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </StyleRoot>
        );
    }
}

export default App;
