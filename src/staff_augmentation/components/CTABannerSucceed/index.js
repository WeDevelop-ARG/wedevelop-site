import BackgroundMobile from 'assets/staff_augmentation/cta_banner/background-mobile.component.svg'
import Background from 'assets/staff_augmentation/cta_banner/background.component.svg'
import Illustration from 'assets/staff_augmentation/cta_banner/white_glove_services.component.svg'
import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

export default function CTABannerSucceed ({ onCTAClick }) {
  return (
    <section className={classes.container}>
      <BackgroundMobile className={classes.backgroundMobile} viewBox='0 0 375 641' preserveAspectRatio='xMidYMid slice' />
      <Background className={classes.background} viewBox='0 0 1680 465' preserveAspectRatio='xMidYMid slice' />
      <Illustration className={classes.illustration} viewBox='0 0 397 328' />
      <div className={classes.content}>
        <h2>How can we help you succeed?</h2>
        <p>We look forward to learning how WeDevelop can help you and your business</p>
        <hr />
        <Button
          onClick={onCTAClick}
          className={classes.button}
          variant={['primary', 'white']}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  )
}
