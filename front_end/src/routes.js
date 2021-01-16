import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import SingUp from './pages/singup.js';
import Splash from './pages/splash'
import Levels from './pages/levels';
import QuestionOne from './pages/questions/questionOne';
import Congratulations from './pages/congratulations';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}   />            
                <Route path='/landing' exact component={Splash}/>            
                <Route path='/cadastro' exact component={SingUp}/>            
                <Route path='/perguntas' exact component={Levels}/>            
                <Route path='/question' exact component={QuestionOne}/>            
                <Route path='/congratulations' exact component={Congratulations}/>            
            </Switch>
        </BrowserRouter>
    )
}