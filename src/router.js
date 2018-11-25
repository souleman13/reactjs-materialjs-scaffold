import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './pages/notFound'
import Landing from './pages/landing'
import Testpage from './pages/testpage'
import Explore from './pages/explore'
import Gallery from './pages/gallery'

export default () => (
        <Switch>

            <Route exact path="/" component={Landing}/>

            <Route path="/gallery" component={Gallery}/>

            <Route path="/explore" component={Explore}/>

            <Route path="/test" component={Testpage}/>

            <Route component={NotFound}/>

        </Switch>
)