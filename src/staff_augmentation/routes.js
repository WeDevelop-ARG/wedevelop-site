import { Route, Switch } from 'react-router'

import LandingPage from './landing_page'
import useLandingVariants from './hooks/useLandingVariants'

function Routes ({ children }) {
  const { variants } = useLandingVariants()

  return (
    <Switch>
      {variants.map(({ pathName }) => (
        <Route exact path={`/${pathName}`} key={pathName}>
          <LandingPage />
        </Route>
      ))}
      {children}
    </Switch>
  )
}

export default Routes
