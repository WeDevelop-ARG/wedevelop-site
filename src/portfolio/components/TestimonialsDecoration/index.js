import DotsPattern from 'assets/portfolio/dots_pattern.svg'

import classes from './styles.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

function TestimonialsDecoration () {
  return (
    <>
      <WrappedImage src={DotsPattern} alt='' className={classes.leftPattern} />
      <WrappedImage src={DotsPattern} alt='' className={classes.rightPattern} />
    </>
  )
}

export default TestimonialsDecoration
