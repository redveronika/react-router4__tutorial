import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink, Switch, Redirect
} from 'react-router-dom';
import './App.css';

const loggedIn = true;

const isActiveFunc = (match) => {
    return match;
};

const Links = () => (
    <nav>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/about" >About</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/contact" >Contact</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/old-page" >Old page</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/new-page" >New page</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/404" >404</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/sign-in" >Sign In</NavLink>
    </nav>
);

const Contact = () => (
    <section>
        <h1>Contact</h1>
        <nav>
            <NavLink
                isActive={isActiveFunc}
                activeClassName="active"
                to="/contact/phone" >
                Phone number
            </NavLink>
            <NavLink
                isActive={isActiveFunc}
                activeClassName="active"
                to="/contact/email" >
                Email
            </NavLink>
            <NavLink
                isActive={isActiveFunc}
                activeClassName="active"
                to="/contact/map" >
                Map
            </NavLink>
            <Route path="/contact/:subpage" render={({match}) => <h2>{match.params.subpage}</h2>}/>
        </nav>
    </section>
);

const App = () => (
    <Router>
        <div>
            <Links/>
            <Switch>
                <Route path="/about" render={() => <h1>About</h1>} />
                <Route path="/contact" component={Contact} />
                <Route path="/new-page" render={() => <h1>New page</h1>} />

                {/* First way to redirect from one page to another*/}
                {/*<Redirect from="/old-page" to="/new-page" />*/}

                {/* Second way to redirect from one page to another*/}
                <Route path="/old-page" render={() => (
                    <Redirect to="/new-page"/>
                )}/>

                <Route path="/sign-in" render={() => (
                    loggedIn
                        ? <h1>Welcome USERNAME</h1>
                        : <h1>You need to register!</h1>
                )} />

                <Route render={() => <h1>Page not found</h1>}/>
            </Switch>
        </div>
    </Router>
);

export default App;