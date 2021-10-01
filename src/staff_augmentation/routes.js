import { LazyRoute } from 'main_app/components/LazyRoute'
import { lazy } from 'react'
import { Switch } from 'react-router'

import useLandingVariants from './hooks/useLandingVariants'

const LandingPage = lazy(() => import('./landing_page'))

function Routes ({ children }) {
  const { variants } = useLandingVariants()

  return (
    <Switch>
      {variants.map(({ pathName }) => (
        <LazyRoute exact path={`/${pathName}`} key={pathName}>
          <LandingPage />
        </LazyRoute>
      ))}
      {children}
    </Switch>
  )
}

export default Routes
