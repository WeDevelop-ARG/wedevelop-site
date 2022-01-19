import Link from 'next/link'

import Button from 'main_app/components/Button'
import Image from 'next/image'

import IsologoColor from 'assets/logo/isologo_color.svg'

import classes from './styles.module.scss'

function ConfirmationMessage () {
  return (
    <div className={classes.container}>
      <div className={classes.confirmationBadge}>
        <Image src={IsologoColor} alt='' className={classes.wedevLogo} />
      </div>
      <div className={classes.messageSent}>
        <h2>We got it!</h2>
        <p>Thanks for your message.</p>
        <p>One of our representatives will receive it shortly and get back to you within the next hour.</p>
      </div>
      <div className={classes.redirectToWebsite}>
        <p>In the meantime, you'll be redirected to our website, so you get to know us better &#128521;</p>
        <Button
          as={Link}
          to='/'
          smooth
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
