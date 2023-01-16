import Iframe from 'react-iframe'

import classes from './styles.module.scss'

export default function WeDevelopCareers () {
  return (
    <Iframe
      url='https://careers.wedevelop.me/jobs'
      scrolling='auto'
      className={classes.container}
    />
  )
}
