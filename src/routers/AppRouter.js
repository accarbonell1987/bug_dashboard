import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LandingPage, Error404 } from 'pages'
import AxiosProvider from 'components/Axios'

const AppRouter = ({ serverAddress }) => {
  return (
    <AxiosProvider>
      <Router>
        <Switch>
          <Route path={'/landing'}>
            <h1>
              <LandingPage serverAddress={serverAddress} />
            </h1>
          </Route>
          <Route exact path={'/'}>
            <h1>
              <LandingPage serverAddress={serverAddress} />
            </h1>
          </Route>
          <Route path={'*'}>
            <h1>
              <Error404 />
            </h1>
          </Route>
        </Switch>
      </Router>
    </AxiosProvider>
  )
}

export default AppRouter
