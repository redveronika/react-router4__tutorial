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

const App = () => (
    <Router>
        <div>
            <Links/>
            <Switch>
                <Route path="/:page" render={({match}) => (<h1>{match.params.page}</h1>)}/>
                <Route render={() => <h1>Page not found</h1>}/>
            </Switch>
        </div>
    </Router>
);

export default App;