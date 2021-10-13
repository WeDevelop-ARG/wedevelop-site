import { memo } from 'react'
import loadable from '@loadable/component'
import { PrerenderedComponent } from 'react-prerendered-component'

export function prerenderedLazy (dynamicImport) {
  const LoadableComponent = loadable(dynamicImport)

  return memo(props => (
    <PrerenderedComponent live={LoadableComponent.load()}>
      <LoadableComponent {...props} />
    </PrerenderedComponent>
  ))
}
