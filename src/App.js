import React from 'react'
import { createBrowserHistory } from 'history'
import { Box } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from 'components/pages/Public'
import { ProtectedRoute } from 'components/pages/Private'

export const history = createBrowserHistory()
const App = () => {
  return (
    <Box className="App">
      <Router history>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    </Box>
  )
}

export default App
