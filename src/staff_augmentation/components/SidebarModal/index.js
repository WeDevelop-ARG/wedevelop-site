import { useEffect, useRef } from 'react'
import classNames from 'classnames'

import AvatarNahuel from 'assets/staff_augmentation/members/nahuel.png'
import AvatarFederica from 'assets/staff_augmentation/members/federica.png'
import AvatarRicardo from 'assets/staff_augmentation/members/ricardo.png'
import { ReactComponent as ModalShape } from 'assets/staff_augmentation/modal_shape.svg'
import { ReactComponent as MobileModalShape } from 'assets/staff_augmentation/mobile_modal_shape.svg'
import ModalDotsPattern from 'assets/staff_augmentation/modal_dots_pattern.svg'

import Image from 'main_app/components/Image'

import useMediaQuery from 'utils/use_media_query'
import { forDesktopUp } from 'styles/media_queries'

import classes from './styles.module.scss'

export default function SidebarModal({ className, content }) {
  const containerClass = classNames(classes.rightSideContent, className)
  const isDesktopUp = useMediaQuery(forDesktopUp)
  const desktopShapeRef = useRef()
  const containerRef = useRef()

  useEffect(() => {
    if (!isDesktopUp) {
      containerRef.current.style.width = 'auto'
      return undefined
    }

    const listener = () => {
      containerRef.current.style.width = `${
        desktopShapeRef.current.getBoundingClientRect().width
      }px`
    }

    window.addEventListener('resize', listener, { passive: true })
    listener()

    return () => {
      window.removeEventListener('resize', listener, { passive: true })
    }
  }, [isDesktopUp])

  return (
    <aside ref={containerRef} className={containerClass}>
      <ModalShape ref={desktopShapeRef} className={classes.modalDecoration} />
      <MobileModalShape className={classes.mobileDecoration} />
      <Image src={ModalDotsPattern} className={classes.modalDotsPattern} />
      <div className={classes.content}>
        <p className={classes.whatsNext}>What's next?</p>
        <p className={classes.rightSideText}>
          {content}
        </p>
        <div className={classes.avatars}>
          <Image src={AvatarRicardo} width={89} resize='auto-height' objectFit='cover' alt="Ricardo's avatar" />
          <Image src={AvatarFederica} width={89} resize='auto-height' objectFit='cover' alt="Federica's avatar" />
          <Image src={AvatarNahuel} width={89} resize='auto-height' objectFit='cover' alt="Nahuel's avatar" />
        </div>
      </div>
    </aside>
  )
}
