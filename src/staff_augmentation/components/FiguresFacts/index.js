import WrappedImage from 'main_app/components/WrappedImage'

import Top3 from 'assets/staff_augmentation/figures_facts/TOP3.svg'
import Avatar from 'assets/staff_augmentation/figures_facts/avatar.png'
import BackgroundDesktop from 'assets/staff_augmentation/figures_facts/background_desktop.component.svg'
import BackgroundMobile from 'assets/staff_augmentation/figures_facts/background_mobile.component.svg'
import ColombiaCircle from 'assets/staff_augmentation/figures_facts/colombia_circle.svg'
import Icons from 'assets/staff_augmentation/figures_facts/icons.component.svg'
import ContactCTA from './ContactCTA'
import useMediaQuery from 'utils/use_media_query'
import { forTabletDown } from 'styles/media_queries'

import classes from './styles.module.scss'

export default function FiguresFacts ({ onCTAClick }) {
  const isTabletDown = useMediaQuery(forTabletDown)

  return (
    <section className={classes.container}>
      <BackgroundDesktop className={classes.desktopBackground} viewBox='0 0 1680 811' preserveAspectRatio='xMidYMid slice' />
      <BackgroundMobile className={classes.mobileBackground} viewBox='0 0 419 694' preserveAspectRatio='xMidYMid slice' />
      <div className={classes.titleContainer}>
        <h3>our numbers</h3>
        <h2>
          Figures <br />
          &amp; Facts
        </h2>
        <hr />
        {isTabletDown || <ContactCTA onCTAClick={onCTAClick} />}
      </div>
      <div className={classes.top3Container}>
        <WrappedImage className={classes.top3} src={Top3} layout='responsive' alt='Top 3% Latam Talent' />
        <figure>
          <WrappedImage className={classes.avatar} src={Avatar} layout='responsive' alt='' />
          <figcaption>
            <WrappedImage src={ColombiaCircle} alt='From Colombia' className={classes.flagIcon} layout='responsive' />
            <div className={classes.textContainer}>
              <div className={classes.name}>Vanina Pérez</div>
              <div className={classes.position}>Software Engineer</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <Icons
        className={classes.icons}
        viewBox='0 0 688 411'
        preserveAspectRatio='xMidYMid meet'
        alt='One hundred percent customer success rate. More than 200 fully vetted developers. Average hiring time of two weeks. Average time difference of two hours.'
      />
      {isTabletDown && <ContactCTA onCTAClick={onCTAClick} />}
    </section>
  )
}
