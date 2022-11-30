import useReviews from 'main_app/components/Testimonials/hooks/useReviews'

import Testimonials from 'main_app/components/Testimonials'
import WrappedImage from 'main_app/components/WrappedImage'

import manExplaining from 'assets/about_us/areas_of_expertise/man-explaining.png'

import classes from './styles.module.scss'

export default function TestimonialsContainer () {
  const { reviews } = useReviews()

  return (
    <>
      <Testimonials
        reviews={reviews}
        hideSubtitle
      />
      <WrappedImage src={manExplaining} layout='responsive' className={classes.dividerImage} />
    </>
  )
}
