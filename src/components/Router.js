import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Table from './Table';
import Login from './Login';
import Header from './Header';
import NoWatch from './NoWatch';
import fire from '../config/Fire';
class Router extends React.Component {
    state = {
        user: {},
    };
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
            } else {
                this.setState({ user: null });
            }
        });
    }
    render() {
        console.log(this.state.user);
        return (
            <BrowserRouter>
                {this.state.user === null && <Redirect to="/login" />}
                <Switch>
                    <Route
                        path="/login"
                        render={(props) => {
                            return this.state.user === null ? (
                                <Login {...props} />
                            ) : (
                                <Redirect to="/dashboard" />
                            );
                        }}
                    />

                    <Route component={Header} />
                    {/* <Route path="/dashboard" component={Dashboard}/> */}

                    {/*<Route component={NoWatch} />*/}
                    {/* <Route path="/details" component={Table}/> */}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
