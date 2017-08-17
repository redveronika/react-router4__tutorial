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
        <NavLink isActive={isActiveFunc} exact activeClassName="active" to="/" >Home</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/about" >About</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/contact" >Contact</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName="active" to="/old-page" >Old page</NavLink>
    </nav>
);


const Home = () => {
    return <h1>Home</h1>;
};

const App = () => (
    <Router>
        <div>
            <Links/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" render={() => <h1>About</h1>}/>
                <Route path="/contact" render={() => <h1>Contact</h1>}/>
                <Route render={() => <h1>Page not found</h1>}/>
            </Switch>
        </div>
    </Router>
);

export default App;