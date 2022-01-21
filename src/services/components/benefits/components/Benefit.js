import WrappedImage from 'main_app/components/WrappedImage'
import Image from 'next/image'
import classes from '../benefits.module.scss'

function Benefit ({ className, image, text }) {
  return (
    <div className={className}>
      <WrappedImage layout='responsive' className={classes.iconCircle} src={image} alt='' />
      <p className={classes.descriptionText}>{text}</p>
    </div>
  )
}

export default Benefit
