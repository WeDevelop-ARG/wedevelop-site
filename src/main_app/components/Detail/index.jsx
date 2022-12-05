import Image from 'main_app/components/Image'

import rightArrowButton from 'assets/about_us/areas_of_expertise/right-arrow-button.svg'

import classes from './styles.module.scss'

export default function Detail (props) {
  const { name } = props

  return (
    <div className={classes.profileContainer}>
      <Image src={rightArrowButton} width='24px' height='24px' alt='white arrow pointing right in a violet gradient circle' />
      <span className={classes.name}>{name}</span>
    </div>
  )
}
