import React from 'react';
import Landing from './Landing';
import App from './App';
import NotFound from './NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const Router = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landing}></Route>
            <Route path='/restaurant/:restaurantId' component={App}></Route>
            <Route component={NotFound}></Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Router;