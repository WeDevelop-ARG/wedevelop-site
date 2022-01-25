import Image from 'main_app/components/Image'

import DotsPattern from 'assets/portfolio/dots_pattern.svg'

import classes from './styles.module.scss'

function TestimonialsDecoration () {
  return (
    <>
      <Image src={DotsPattern} alt='' className={classes.leftPattern} />
      <Image src={DotsPattern} alt='' className={classes.rightPattern} />
    </>
  )
}

export default TestimonialsDecoration
