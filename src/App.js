import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
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
    </nav>
);


const Home = (props) => {
    console.log(props)
    return <h1>Home</h1>;
};

const App = () => (
    <Router>
        <div>
            <Links/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" render={() => <h1>About</h1>}/>
            <Route path="/contact" render={() => <h1>Contact</h1>}/>
        </div>
    </Router>
);

export default App;
