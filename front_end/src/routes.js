import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from './pages/splash/splash'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Splash}   />            
            </Switch>
        </BrowserRouter>
    )
}