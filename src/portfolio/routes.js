import { LazyRoute } from 'main_app/components/LazyRoute'
import { Switch, useRouteMatch } from 'react-router'

import { prerenderedLazy } from 'utils/prerendered_lazy'

import useStories from './hooks/useStories'

const Portfolio = prerenderedLazy(() => import('./pages/Portfolio'))
const StoryDetailPage = prerenderedLazy(() => import('./pages/StoryDetails'))
const NotFound = prerenderedLazy(() => import('not_found'))

function PortfolioRoutes ({ children }) {
  const { path } = useRouteMatch()
  const { stories } = useStories()

  return (
    <Switch>
      <LazyRoute exact path={`${path}(/contact)?`}>
        <Portfolio />
      </LazyRoute>
      {stories.map(({ urlName }) => (
        <LazyRoute exact path={`${path}/${urlName}(/contact)?`} key={urlName}>
          <StoryDetailPage />
        </LazyRoute>
      ))}
      <LazyRoute path={path}>
        <NotFound />
      </LazyRoute>
    </Switch>
  )
}

export default PortfolioRoutes
