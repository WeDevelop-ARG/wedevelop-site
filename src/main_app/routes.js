import { Route, Switch } from 'react-router-dom'
import Landing from 'home'
import NotFound from 'not_found'
import StaffAugmentationRoutes from 'staff_augmentation/routes'
import ContactUs from 'contact_us'
import Services from 'services'
import PrivacyPolicy from 'privacy_policy'
import AboutUs from 'about_us'
import Career from 'career'
import Testimonials from './components/Testimonials'

function Routes () {
  return (
    <Switch>
      <Route exact path={['/', '/contact']}>
        <Landing />
      </Route>
      <Route path='/services'>
        <Services />
      </Route>
      <Route path='/testimonials'>
        <Testimonials />
      </Route>
      <Route path='/contact'>
        <ContactUs />
      </Route>
      <Route path='/privacy-policy'>
        <PrivacyPolicy />
      </Route>
      <Route path='/about-us(/contact)?'>
        <AboutUs />
      </Route>
      <Route path='/career(/contact)?'>
        <Career />
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
