import { Route } from 'react-router'

import LandingPage from './landing_page'
import useLandingVariants from './hooks/useLandingVariants'

function Routes () {
  const { variants } = useLandingVariants()

  return variants.map(({ pathName }) => (
    <Route exact path={`/${pathName}`} key={pathName}>
      <LandingPage />
    </Route>
  ))
}

export default Routes
