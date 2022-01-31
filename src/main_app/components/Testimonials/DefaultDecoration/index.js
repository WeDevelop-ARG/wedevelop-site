import WrappedImage from 'main_app/components/WrappedImage'

import DotsPattern from 'assets/home/dots_pattern.svg'

import classes from './styles.module.scss'

function DefaultDecoration () {
  return (
    <>
      <WrappedImage src={DotsPattern} layout='intrinsic' alt='' className={classes.topRightPattern} aria-hidden='true' />
      <WrappedImage src={DotsPattern} layout='intrinsic' alt='' className={classes.middleLeftPattern} aria-hidden='true' />
      <div className={classes.filledSmallCircle} aria-hidden='true' />
      <div className={classes.emptySmallCircle} aria-hidden='true' />
      <div className={classes.smallBlurLeftCircle} aria-hidden='true' />
      <div className={classes.filledBigCircle} aria-hidden='true' />
      <div className={classes.emptyBigCircle} aria-hidden='true' />
      <div className={classes.smallCircle} aria-hidden='true' />
      <div className={classes.smallBlurRightCircle} aria-hidden='true' />
    </>
  )
}

export default DefaultDecoration
