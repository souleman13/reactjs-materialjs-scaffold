import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './pages/notFound'
import Landing from './pages/landing'
import Testpage from './pages/testpage'

export default () => (
        <Switch>

            <Route exact path="/" component={Landing}/>

            <Route path="/gallery" component={Testpage}/>

            <Route path="/contact" component={Testpage}/>

            <Route path="/explore" component={Testpage}/>

            <Route component={NotFound}/>

        </Switch>
)