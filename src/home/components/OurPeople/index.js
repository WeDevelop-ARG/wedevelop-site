import BrandGradient from 'main_app/components/TextGradient'
import IntroductionImg from 'assets/home/introduction-img.png'

import classes from './styles.module.scss'

function OurPeople () {
  return (
    <div id='our-people' className={classes.ourPeopleSection}>
      <div className={classes.textContainer}>
        <h2>We are <BrandGradient>Friendly and Professional</BrandGradient> people</h2>
        <p>WeDevelop is a SDaaS company born in Argentina focused on <b>high-quality and long-term solutions.</b></p>
        <p>Clients’ satisfaction is our goal, so we strive to always provide excellent software following the <b>best practices</b> and pursuing <b>cutting-edge technologies.</b></p>
        <p>We are also friendly people with professionalism and good vibes and we want everyone to feel that <b>working with us is like working with friends.</b></p>
      </div>
      <img src={IntroductionImg} alt='' className={classes.introductionImg} />
    </div>
  )
}

export default OurPeople
