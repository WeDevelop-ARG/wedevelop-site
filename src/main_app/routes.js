import { Route, Switch } from 'react-router-dom'
import Landing from 'home'
import NotFound from 'not_found'
import StaffAugmentationRoutes from 'staff_augmentation/routes'
import ContactUs from 'contact_us'
import PrivacyPolicy from 'privacy_policy'

function Routes () {
  return (
    <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <StaffAugmentationRoutes />
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
  )
}

export default Routes
