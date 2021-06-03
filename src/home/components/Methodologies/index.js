import Agile from 'assets/home/agile.png'

import classes from './styles.module.scss'

function Methodologies () {
  return (
    <section id='methodologies' className={classes.methodologiesSection}>
      <div className={classes.container}>
        <h2>We use agile methodologies</h2>
        <p>We understand the meaning of “Agile”, and we love it. SCRUM sets the way and we set the pace by generating <b>small and efficient iterations.</b></p>
        <p><b>Clean code</b> is our distinctive mark. We know code may change and will change through your project’s lifetime, so we help you to have it adjusted and improved to meet new requirements over time.</p>
      </div>
      <img src={Agile} alt='' role='img' className={classes.agileImg} />
    </section>
  )
}

export default Methodologies
