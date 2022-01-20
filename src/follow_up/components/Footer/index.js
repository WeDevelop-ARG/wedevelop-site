import InternalLink from 'main_app/components/InternalLink'

import classes from './styles.module.scss'

function Footer () {
  return (
    <footer id='follow-up-footer' className={classes.footer}>
      <ul className={classes.branding}>
        <li>
          <InternalLink href='/privacy-policy#top' smooth className={classes.privacyPolicy}>
            Privacy&nbsp;Policy
          </InternalLink>
        </li>
        <li className={classes.pleca}>|</li>
        <li className={classes.copyright}>
          © 2021 WeDevelop LLC. All rights reserved.
        </li>
      </ul>
    </footer>
  )
}

export default Footer
