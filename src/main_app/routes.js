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
      <Route path='/contact'>
        <ContactUs />
      </Route>
      <Route path='/privacy-policy'>
        <PrivacyPolicy />
      </Route>
      <StaffAugmentationRoutes>
        <Route path='/'>
          <NotFound />
        </Route>
      </StaffAugmentationRoutes>
    </Switch>
  )
}

export default Routes
