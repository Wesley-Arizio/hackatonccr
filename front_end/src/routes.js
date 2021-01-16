import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Splash from './pages/splash'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}   />            
                <Route path='/landing' exact component={Splash}   />            
            </Switch>
        </BrowserRouter>
    )
}