import { Switch, Route } from 'react-router-dom'

import { prerenderedLazy } from 'utils/prerendered_lazy'

import { LazyRoute } from './components/LazyRoute'

import StaffAugmentationRoutes from 'staff_augmentation/routes'
import PortfolioRoutes from 'portfolio/routes'

const Landing = prerenderedLazy(() => import('home'))
const NotFound = prerenderedLazy(() => import('not_found'))
const ContactUs = prerenderedLazy(() => import('contact_us'))
const Services = prerenderedLazy(() => import('services'))
const PrivacyPolicy = prerenderedLazy(() => import('privacy_policy'))
const AboutUs = prerenderedLazy(() => import('about_us'))
const Career = prerenderedLazy(() => import('career'))
const FollowUp = prerenderedLazy(() => import('follow_up'))
const SuccessConfirm = prerenderedLazy(() => import('success'))

function Routes () {
  return (
    <Switch>
      <Route path='test-optimize-a'>
        <h1>A</h1>
      </Route>
      <Route path='test-optimize-b'>
        <h1>B</h1>
      </Route>
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
      <LazyRoute path='/careers(/contact)?'>
        <Career />
      </LazyRoute>
      <Route path='/portfolio'>
        <PortfolioRoutes />
      </Route>
      <LazyRoute path='/follow-up'>
        <FollowUp />
      </LazyRoute>
      <LazyRoute path='/success/confirm'>
        <SuccessConfirm />
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
