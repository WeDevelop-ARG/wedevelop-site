import { useCallback, useState } from 'react'
import classNames from 'classnames'

import useMediaQuery from 'utils/use_media_query'

import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

import BlueArrow from 'assets/portfolio/arrow.component.svg'
import BlueTopArrow from 'assets/reasons_to_choose_wedev/top_arrow.component.svg'

import { forPhoneOnly } from 'styles/media_queries'

import classes from './styles.module.scss'

function ReasonWithSideImage ({ isRightAlignment, imageURL, title, description, toggleContent }) {
  const isPhoneOnly = useMediaQuery(forPhoneOnly)
  const [displayToggleContainer, setDisplayToggleContainer] = useState(false)
  const [hideSeeMoreButton, setHideSeeMoreButton] = useState(false)
  const handleShowToggleContainer = useCallback(() => {
    setDisplayToggleContainer(true)
    setHideSeeMoreButton(true)
  }, [setDisplayToggleContainer, setHideSeeMoreButton])
  const handleHideToggleContainer = useCallback(() => {
    setDisplayToggleContainer(false)
    setHideSeeMoreButton(false)
  }, [setDisplayToggleContainer, setHideSeeMoreButton])

  return (
    <section className={classes.container}>
      <div className={isRightAlignment && !isPhoneOnly ? classes.imageContainerToRight : classes.imageContainerToLeft}>
        <Image src={imageURL} alt='' className={classes.reasonImage} />
      </div>
      <div className={classNames(classes.reasonContent, {
        [classes.verticalAlignToCenter]: !displayToggleContainer
      })}
      >
        <h2 className={classNames(classes.title, {
          [classes.textAlignToRight]: isRightAlignment && !isPhoneOnly
        })}
        >
          {title}
        </h2>
        <p className={classNames(classes.description, {
          [classes.textAlignToRight]: isRightAlignment && !isPhoneOnly
        })}
        >
          {description}
        </p>
        <div className={classNames(classes.toggleContainer, {
          [classes.textAlignToRight]: isRightAlignment && !isPhoneOnly,
          [classes.displayToggleContainer]: displayToggleContainer
        })}
        >
          {toggleContent}
        </div>
        <Button
          variant='link'
          iconRight={<BlueArrow />}
          className={classNames(classes.seeButton, {
            [classes.seeButtonToRight]: isRightAlignment && !isPhoneOnly,
            [classes.hideSeeButton]: hideSeeMoreButton
          })}
          onClick={() => handleShowToggleContainer()}
        >
          See More
        </Button>
        <Button
          variant='link'
          iconRight={<BlueTopArrow />}
          className={classNames(classes.seeButton, {
            [classes.seeButtonToRight]: isRightAlignment && !isPhoneOnly,
            [classes.hideSeeButton]: !hideSeeMoreButton
          })}
          onClick={() => handleHideToggleContainer()}
        >
          See Less
        </Button>
      </div>
    </section>
  )
}

export default ReasonWithSideImage
