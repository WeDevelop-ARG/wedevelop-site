import { LazyRoute } from 'main_app/components/LazyRoute'
import { Switch } from 'react-router'

import { prerenderedLazy } from 'utils/prerendered_lazy'

import useLandingVariants from './hooks/useLandingVariants'

const LandingPage = prerenderedLazy(() => import('./landing_page'))

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
