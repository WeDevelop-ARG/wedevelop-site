import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from '../landing'

function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
