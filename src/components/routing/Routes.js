import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Onboarding from '../onboarding/Onboarding'
import Dashboard from '../dashboard/Dashboard'
import Quotes from '../quotes/Quotes'

import NotFound from '../layout/NotFound'

const Routes = () => {
  return (
    <main role="main">
      <Switch>
        {/* we could implement a private route component, typically we would for dash/quotes/etc, maybe if we have time */}
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/quotes" component={Quotes} />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

export default Routes