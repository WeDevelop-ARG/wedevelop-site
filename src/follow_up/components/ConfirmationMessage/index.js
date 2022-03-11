import InternalLink from 'main_app/components/InternalLink'

import Button from 'main_app/components/Button'

import IsologoColor from 'assets/logo/isologo_color.svg'

import classes from './styles.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

function ConfirmationMessage () {
  return (
    <div className={classes.container}>
      <div className={classes.confirmationBadge}>
        <WrappedImage src={IsologoColor} layout='responsive' alt='' className={classes.wedevLogo} />
      </div>
      <div className={classes.messageSent}>
        <h2>We got it!</h2>
        <p>Thanks for your message.</p>
        <p>One of our representatives will receive it shortly and get back to you within the next hour.</p>
      </div>
      <div className={classes.redirectToWebsite}>
        <p>In the meantime, you'll be redirected to our website, so you get to know us better &#128521;</p>
        <Button
          as={InternalLink}
          href='/'
          variant='primary'
          className={classes.goWebsiteButton}
        >
          Continue to our website
        </Button>
      </div>
    </div>
  )
}

export default ConfirmationMessage
