import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from 'landing'
import NotFound from 'not_found'
import ContactUs from 'contact_us'
import PrivacyPolicy from 'privacy_policy'

function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/contact-us'>
          <ContactUs />
        </Route>
        <Route path='/privacy-policy'>
          <PrivacyPolicy />
        </Route>
        <Route path='/'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
