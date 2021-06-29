import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlaces from './places/pages/NewPlaces'
function App () {
  return (
    <Router>
      <Switch>
        <Route path='/user' exact>
          <Users />
        </Route>
        <Route path='/place/new' exact>
          <NewPlaces />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
