import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink, Switch
} from 'react-router-dom';
import './App.css';

const isActiveFunc = (match) => {
    return match;
};

const Links = () => (
    <nav>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/about" >About</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/contact" >Contact</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/old-page" >Old page</NavLink>
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
            <Route path="/contact/:subpage" render={({match}) => <h2>{match.params.subpage}</h2>}></Route>
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
                <Route render={() => <h1>Page not found</h1>}/>
            </Switch>
        </div>
    </Router>
);

export default App;