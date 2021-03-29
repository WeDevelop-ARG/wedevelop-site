import classnames from 'classnames'

import classes from './styles.module.scss'

function Article ({ className, ...props }) {
  return (
    <article
      className={classnames(classes.article, { [className]: className })}
      {...props}
    />
  )
}

export default Article
