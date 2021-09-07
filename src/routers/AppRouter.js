import React, { Component } from 'react';
import Registro from '../components/Registro'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import App from '../containers/App';

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/registro" exact component={Registro} />
                    <Route path="/" exact component={App} />
                </Switch>
            </Router>
        )
    }
}
