import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import review from "./modules/film/components/review";

import Home from "./modules/film/components/MovieBrowser";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/review" component={review} />
                </Switch>
            </Router>
        )
    }
}