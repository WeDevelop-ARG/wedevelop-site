import { Switch } from 'react-router-dom'

import { prerenderedLazy } from 'utils/prerendered_lazy'

import { LazyRoute } from './components/LazyRoute'

import StaffAugmentationRoutes from 'staff_augmentation/routes'

const Landing = prerenderedLazy(() => import('home'))
const NotFound = prerenderedLazy(() => import('not_found'))
const ContactUs = prerenderedLazy(() => import('contact_us'))
const Services = prerenderedLazy(() => import('services'))
const PrivacyPolicy = prerenderedLazy(() => import('privacy_policy'))
const AboutUs = prerenderedLazy(() => import('about_us'))
const Career = prerenderedLazy(() => import('career'))
const Portfolio = prerenderedLazy(() => import('portfolio'))

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
      <LazyRoute path='/portfolio(/contact)?'>
        <Portfolio />
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
