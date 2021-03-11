import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../components/login';
import Header from '../components/header';
import Landing from '../components/landing';


export default function Main(){
    return (
        <Router>
            <Route exact path={"/"} component={Landing}></Route>
            <Header>
            <Route exact path={"/login"} component={Login}></Route>
            </Header>
        </Router>
    )
}