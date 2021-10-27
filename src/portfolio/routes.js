import { LazyRoute } from 'main_app/components/LazyRoute'
import { Switch, useRouteMatch } from 'react-router'

import { prerenderedLazy } from 'utils/prerendered_lazy'

import useStoryDetailVariants from './story_details/hooks/useStoryDetailVariants'

const Portfolio = prerenderedLazy(() => import('./index'))
const StoryDetailPage = prerenderedLazy(() => import('./story_details'))
const NotFound = prerenderedLazy(() => import('not_found'))

function PortfolioRoutes ({ children }) {
  const { path } = useRouteMatch()
  const { variants } = useStoryDetailVariants()

  return (
    <Switch>
      <LazyRoute exact path={`${path}(/contact)?`}>
        <Portfolio />
      </LazyRoute>
      {variants.map(({ urlName }) => (
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
