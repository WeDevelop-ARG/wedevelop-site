import IntroductionImg from 'assets/home/introduction-img.svg'

import classes from './styles.module.scss'

function OurPeople () {
  return (
    <div id='our-people' className={classes.ourPeopleSection}>
      <div className={classes.container}>
        <h2>We are <span className={classes.gradient}>Friendly and Professional</span> people</h2>
        <p>WeDevelop is a SDaaS company born in Argentina focused on <b>high-quality and long-term solutions.</b></p>
        <p>Clients’ satisfaction is our goal, so we strive to always provide excellent software following the <b>best practices</b> and pursuing <b>cutting-edge technologies.</b></p>
        <p>We are also friendly people with professionalism and good vibes and we want everyone to feel that <b>working with us is like working with friends.</b></p>
      </div>
      <img src={IntroductionImg} alt='' role='img' />
    </div>
  )
}

export default OurPeople
