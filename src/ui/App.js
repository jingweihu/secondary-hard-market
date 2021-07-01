import '../App.css';
import Home from "./home/Home";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./common/Header";
import Login from "./login/Login";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
