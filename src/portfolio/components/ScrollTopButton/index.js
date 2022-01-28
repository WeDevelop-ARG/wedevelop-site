import ScrollToTop from 'react-scroll-to-top'

import { ReactComponent as TopArrow } from 'assets/portfolio/top_arrow.component.svg'

import classes from './styles.module.scss'

function ScrollTopButton () {
  return (
    <ScrollToTop
      component={<TopArrow />}
      className={classes.scrollTopButton}
    />
  )
}

export default ScrollTopButton
