import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from 'landing'
import NotFound from 'not_found'
import StaffAugmentation from 'staff_augmentation'
import ContactUs from 'contact_us'
import PrivacyPolicy from 'privacy_policy'

function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/staff-augmentation'>
          <StaffAugmentation />
        </Route>
        <Route path='/contact'>
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
