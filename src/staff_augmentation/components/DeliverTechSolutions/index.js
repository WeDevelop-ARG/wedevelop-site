import { HashLink } from 'react-router-hash-link'
import classnames from 'classnames'

import Button from 'main_app/components/Button'
import MaleInVideocall from 'assets/staff_augmentation/male_videocall.png'
import MaleUsingComputer from 'assets/staff_augmentation/male_computer.png'

import classes from './styles.module.scss'

function DeliverTechSolutions () {
  return (
    <section className={classes.techSolutionsSection}>
      <div className={classes.bigCircle} role='presentation' />
      <div className={classes.smallCircle} role='presentation' />
      <div className={classnames(classes.contentWrapper, classes.firstContentWrapper)}>
        <div className={classes.maleVideocallFrame}>
          <img src={MaleInVideocall} alt='' role='presentation' className={classes.maleVideocallImage} />
        </div>
        <div className={classnames(classes.textContainer, classes.firstTextContainer)}>
          <h2>We Deliver scalable <span>Tech Solutions</span></h2>
          <p>
            We are the expert partner you need to deliver scalable, 
            innovative, and competitive results.We specialize in solid 
            end-to-end <span>delivery of tailor-made technology solutions.</span>
          </p>
          <Button
            as={HashLink}
            to='#header-section'
            smooth
            variant={'secondary'}
            className={classes.upgradeButton}
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
          <h2 className={classes.titleText}>We Deliver scalable Tech Solutions</h2>
          <p>
            Our experienced engineering teams deliver dream-team 
            outcomes, <span>without the hassles of hiring.</span>
          </p>
          <Button
            as={HashLink}
            to='#header-section'
            smooth
            variant={'secondary'}
            className={classes.upgradeButton}
          >
            Upgrade your team
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DeliverTechSolutions
