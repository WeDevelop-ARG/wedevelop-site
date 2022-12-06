import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'
import WrappedImage from 'main_app/components/WrappedImage'

import RightArrow from 'assets/hire_developers/right_arrow.svg'

import classes from './styles.module.scss'

function ListRow ({
  devImgURL,
  devName,
  devRole,
  devSkills,
  devExperience,
  devRate,
  showViewProfileButton = false,
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
        <p>{devRole}</p>
      </div>
      <div className={classes.skills}>
        {devSkills.map(({ skill, color }) => {
          return (
            <span
              key={skill}
              style={{ backgroundColor: color }}
            >
              {skill}
            </span>
          )
        })}
      </div>
      <div className={classes.experience}>
        <p>{devExperience}</p>
      </div>
      <div className={classes.rate}>
        <p>{devRate}</p>
      </div>
      {showViewProfileButton &&
        <div>
          <Button
            variant='icon'
            isAnchor
            iconRight={btnRightArrow}
            className={classes.viewProfileButton}
            onClick={handleModal}
          >
            View Profile
          </Button>
        </div>}
    </>
  )
}

export default ListRow
