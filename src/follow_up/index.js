import Navbar from './components/Navbar'
import Intro from './components/Intro'
import MultiForm from './components/MultiForm'
import Footer from './components/Footer'
import Image from 'main_app/components/Image'

import FollowUpBackground from 'assets/follow_up/background.png'
import FollowUpMobileBackground from 'assets/follow_up/mobile_background.png'
import DotsPattern from 'assets/follow_up/dots_pattern.svg'

import classes from './styles.module.scss'

function FollowUp () {
  // TODO: Obtener nombre del cliente desde los datos guardados con Free Quote Form y pasarlo al componente Intro como prop.
  const provisionalName = 'Jhon'
  return (
    <>
      <Navbar />
      <section className={classes.followUpContainer}>
        <div className={classes.stepsContainer}>
          <Intro clientName={provisionalName} />
          <MultiForm />
        </div>
        <Image src={FollowUpMobileBackground} alt='' className={classes.mobileBackground} />
        <Footer />
        <img src={FollowUpBackground} alt='' className={classes.background} aria-hidden />
        <div className={classes.filledCircle} aria-hidden />
        <div className={classes.emptyCircle} aria-hidden />
        <div className={classes.blurCircle} aria-hidden />
        <img src={DotsPattern} alt='' className={classes.leftDotsPattern} aria-hidden />
      </section>
    </>
  )
}

export default FollowUp
