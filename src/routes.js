import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './componenents/Auth'
import Form from './componenents/Form'
import Feed from './componenents/Feed'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/create_post' component ={Form}/>
        <Route path='/feed' component={Feed}/>
    </Switch>
)