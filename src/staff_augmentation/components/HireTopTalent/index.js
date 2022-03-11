import Button from 'main_app/components/Button'
import ReasonWithSideImage from './ReasonWithSideImage'
import WrappedImage from 'main_app/components/WrappedImage'

import DotsPattern from 'assets/staff_augmentation/dots_pattern.svg'

import classes from './styles.module.scss'

function HireTopTalent ({
  subheadingText,
  titleText,
  reasonsContent,
  buttonText,
  handleModal
}) {
  return (
    <section id='hire-top-talent' className={classes.hireTopTalent}>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>{subheadingText}</p>
          <h2 className={classes.titleText}>{titleText}</h2>
          <hr className={classes.horizontalBar} />
        </div>
        <div className={classes.sectionContent}>
          {reasonsContent.map(({ id, imageURL, title, description, toggleContent }, index) => (
            <ReasonWithSideImage
              key={id}
              imageURL={imageURL}
              title={title}
              description={description}
              toggleContent={toggleContent}
              isRightAlignment={index % 2 === 0}
            />
          ))}
        </div>
        <Button
          variant='primary'
          className={classes.freeQuoteButton}
          onClick={handleModal}
        >
          {buttonText}
        </Button>
      </div>
      <WrappedImage
        src={DotsPattern}
        layout='fixed'
        alt=''
        className={classes.topLeftDotsPattern}
        aria-hidden='true'
      />
      <WrappedImage
        src={DotsPattern}
        layout='fixed'
        alt=''
        className={classes.bottomRightDotsPattern}
        aria-hidden='true'
      />
    </section>
  )
}

export default HireTopTalent
