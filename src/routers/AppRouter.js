import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LandingPage, Error404 } from 'pages'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'}>
          <LandingPage />
        </Route>
        <Route exact path={'/bugs'}>
          <LandingPage />
        </Route>
        <Route path={'*'}>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
