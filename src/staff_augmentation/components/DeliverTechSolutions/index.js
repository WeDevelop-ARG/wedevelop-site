import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'
import MaleInVideocall from 'assets/staff_augmentation/male_videocall.png'
import MaleUsingComputer from 'assets/staff_augmentation/male_computer.png'

import classes from './styles.module.scss'

function DeliverTechSolutions () {
  return (
    <section className={classes.techSolutionsSection}>
      <div className={classes.bigCircle} role='presentation' />
      <div className={classes.smallCircle} role='presentation' />
      <SVGIcon name='staff_augmentation/side_arch' className={classes.sideArch} role='presentation' />
      <div className={classes.contentWrapper}>
        <div className={classes.maleVideocallFrame}>
          <img src={MaleInVideocall} alt='' role='presentation' className={classes.maleVideocallImage} />
        </div>
        <div className={classes.textContainer}>
          <h2>We Deliver scalable <span>Tech Solutions</span></h2>
          <p>
            We are the expert partner you need to deliver scalable, 
            innovative, and competitive results.We specialize in solid 
            end-to-end <span>delivery of tailor-made technology solutions.</span>
          </p>
          <Button
            as={HashLink}
            to='#headerSection'
            smooth
            variant={'secondary'}
          >
            Upgrade your team
          </Button>
        </div>
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.maleComputerFrame}>
          <img src={MaleUsingComputer} alt='' role='presentation' className={classes.maleComputerImage} />
        </div>
        <div className={classes.textContainer}>
          <h2>We Deliver scalable Tech Solutions</h2>
          <p>
            Our experienced engineering teams deliver dream-team 
            outcomes, <span>without the hassles of hiring.</span>
          </p>
          <Button
            as={HashLink}
            to='#headerSection'
            smooth
            variant={'secondary'}
          >
            Upgrade your team
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DeliverTechSolutions
