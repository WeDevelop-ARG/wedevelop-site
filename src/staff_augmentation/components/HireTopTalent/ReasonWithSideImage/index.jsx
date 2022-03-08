import classNames from 'classnames'

import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

import BlueArrow from 'assets/portfolio/arrow.component.svg'

import classes from './styles.module.scss'

function ReasonWithSideImage ({ isRightAlignment, imageURL, title, description, toggleContent }) {
  return (
    <section className={classes.container}>
      <div className={isRightAlignment ? classes.imageContainerToRight : classes.imageContainerToLeft}>
        <Image src={imageURL} alt='' className={classes.reasonImage} />
      </div>
      <div className={classes.reasonContent}>
        <h2 className={classNames(classes.title, {
          [classes.textAlignToRight]: isRightAlignment
        })}
        >
          {title}
        </h2>
        <p className={classNames(classes.description, {
          [classes.textAlignToRight]: isRightAlignment
        })}
        >
          {description}
        </p>
        <div className={classNames(classes.toggleContainer, {
          [classes.textAlignToRight]: isRightAlignment
        })}
        >
          {toggleContent}
        </div>
        <Button
          variant='link'
          iconRight={<BlueArrow />}
          className={classNames(classes.readMore, {
            [classes.readMoreToRight]: isRightAlignment
          })}
        >
          See More
        </Button>
      </div>
    </section>
  )
}

export default ReasonWithSideImage
