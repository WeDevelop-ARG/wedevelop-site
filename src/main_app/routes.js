import { lazy } from 'react'
import { Switch } from 'react-router-dom'

import { LazyRoute } from './components/LazyRoute'

import StaffAugmentationRoutes from 'staff_augmentation/routes'

const Landing = lazy(() => import('home'))
const NotFound = lazy(() => import('not_found'))
const ContactUs = lazy(() => import('contact_us'))
const Services = lazy(() => import('services'))
const PrivacyPolicy = lazy(() => import('privacy_policy'))
const AboutUs = lazy(() => import('about_us'))
const Career = lazy(() => import('career'))

function Routes () {
  return (
    <Switch>
      <LazyRoute exact path={['/', '/contact']}>
        <Landing />
      </LazyRoute>
      <LazyRoute path='/services'>
        <Services />
      </LazyRoute>
      <LazyRoute path='/contact'>
        <ContactUs />
      </LazyRoute>
      <LazyRoute path='/privacy-policy'>
        <PrivacyPolicy />
      </LazyRoute>
      <LazyRoute path='/about-us(/contact)?'>
        <AboutUs />
      </LazyRoute>
      <LazyRoute path='/career(/contact)?'>
        <Career />
      </LazyRoute>
      <StaffAugmentationRoutes>
        <LazyRoute path='/'>
          <NotFound />
        </LazyRoute>
      </StaffAugmentationRoutes>
    </Switch>
  )
}

export default Routes
