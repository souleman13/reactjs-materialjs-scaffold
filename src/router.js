import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './pages/notFound'
import Landing from './pages/landing'
import Testpage from './pages/testpage'

export default () => (
        <Switch>

            <Route exact path="/" component={Landing}/>

            <Route path="/p1" component={Testpage}/>

            <Route path="/p2" component={Testpage}/>

            <Route component={NotFound}/>

        </Switch>
)