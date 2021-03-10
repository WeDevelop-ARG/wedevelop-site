import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from 'landing'
import NotFound from 'not_found'

function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
