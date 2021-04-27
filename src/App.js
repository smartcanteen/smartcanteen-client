import React from 'react'
import { createBrowserHistory } from 'history'
import { Box } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Login } from 'components/pages/Public'
import { ProtectedRoute, Dashboard, Booth } from 'components/pages/Private'
import { AppWrapper } from 'components/layout'

export const history = createBrowserHistory()
const App = () => {
  return (
    <AppWrapper className="App">
      <Router history>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} exact/>
          <ProtectedRoute path="/dashboard" component={Dashboard} exact/>
          <ProtectedRoute path="/booth" component={Booth} exact/>
        </Switch>
      </Router>
    </AppWrapper>
  )
}

export default App
