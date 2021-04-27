import React from 'react'
import { createBrowserHistory } from 'history'
import { Box } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from 'components/pages/Public'
import { ProtectedRoute } from 'components/pages/Private'
import { AppWrapper } from 'components/layout'

export const history = createBrowserHistory()
const App = () => {
  return (
    <AppWrapper className="App">
      <Router history>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    </AppWrapper>
  )
}

export default App
