import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Quotes from './Quotes';

const Router = () => (
    <main className="Content">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/quotes' component={Quotes} />
        </Switch>
    </main>
)

export default Router;