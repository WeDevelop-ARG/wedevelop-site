import ScrollToTop from 'react-scroll-to-top'

import { ReactComponent as TopArrow } from 'assets/portfolio/top_arrow.svg'

import classes from './styles.module.scss'

function ScrollTopButton () {
  return (
    <ScrollToTop
      smooth
      component={<TopArrow />}
      className={classes.scrollTopButton}
    />
  )
}

export default ScrollTopButton
