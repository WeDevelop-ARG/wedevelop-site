import Button from 'main_app/components/Button'

import getBackgroundColor from '../use_background_colors'
import RightArrow from 'assets/hire_developers/right_arrow.svg'
import Image from 'next/image'

import classes from './styles.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

function ListRow ({
  devImgURL,
  devName,
  devRole,
  devSkills,
  devExperience,
  devRate,
  handleModal
}) {
  const btnRightArrow = <Image src={RightArrow} alt='' />

  return (
    <>
      <div className={classes.devImgName}>
        <WrappedImage layout='fill' src={devImgURL} alt='' className={classes.profileImg} />
        <p>{devName}</p>
      </div>
      <div className={classes.roleTech}>
        <p><b>{devRole}</b></p>
      </div>
      <div className={classes.skills}>
        {devSkills.map(({ skill, color }) => {
          return (
            <span
              key={skill}
              style={{ backgroundColor: getBackgroundColor(color) }}
            >
              {skill}
            </span>
          )
        })}
      </div>
      <div className={classes.description}>
        <p>{devExperience}</p>
      </div>
      <div className={classes.rate}>
        <p>{devRate}</p>
      </div>
      <div className={classes.viewProfile}>
        <Button
          variant='icon'
          isAnchor
          smooth
          iconRight={btnRightArrow}
          className={classes.viewProfileButton}
          onClick={handleModal}
        >
          View Profile
        </Button>
      </div>
    </>
  )
}

export default ListRow
