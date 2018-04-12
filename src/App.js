import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Welcome from "./components/Welcome";
import Header from "./components/Header";

const App = () => (

    <BrowserRouter >
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route
                    path="/order/:direction(asc|desc)"
                    component={ComponentWithRegex}
                />
                <Route path="/:number" render={renderNumber} />

            </Switch>
        </div>
    </BrowserRouter>
);

const renderNumber = (props) =>
    <Number {...props} />;
const Number = (props) => (
    <h1>{props.match.params.number}</h1>
);

const Hello = () => (
    <Switch>
        <Route strict path="/:number" children={({match, ...rest}) => (<h1>12313</h1>)} />
    </Switch>
);

const ComponentWithRegex = ({match}) => (
    <div>
        <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
);


export default App;
