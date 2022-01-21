import { useEffect, useRef } from 'react'
import classNames from 'classnames'

import AvatarNahuel from 'assets/staff_augmentation/members/nahuel.png'
import AvatarFederica from 'assets/staff_augmentation/members/federica.png'
import AvatarRicardo from 'assets/staff_augmentation/members/ricardo.png'
import ModalShape from 'assets/staff_augmentation/modal_shape.component.svg'
import MobileModalShape from 'assets/staff_augmentation/mobile_modal_shape.component.svg'
import ModalDotsPattern from 'assets/staff_augmentation/modal_dots_pattern.svg'

import useMediaQuery from 'utils/use_media_query'
import { forDesktopUp } from 'styles/media_queries'

import WrappedImage from 'main_app/components/WrappedImage'

import classes from './styles.module.scss'

export default function SidebarModal ({ className, content }) {
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
      <ModalShape ref={desktopShapeRef} viewBox='0 0 514 899' className={classes.modalDecoration} />
      <MobileModalShape viewBox='0 0 375 426' className={classes.mobileDecoration} />
      <WrappedImage src={ModalDotsPattern} className={classes.modalDotsPattern} alt='' />
      <div className={classes.content}>
        <p className={classes.whatsNext}>What's next?</p>
        <p className={classes.rightSideText}>
          {content}
        </p>
        <div className={classes.avatars}>
          <WrappedImage src={AvatarRicardo} width='89' layout='fill' objectFit='cover' alt="Ricardo's avatar" />
          <WrappedImage src={AvatarFederica} width='89' layout='fill' objectFit='cover' alt="Federica's avatar" />
          <WrappedImage src={AvatarNahuel} width='89' layout='fill' objectFit='cover' alt="Nahuel's avatar" />
        </div>
      </div>
    </aside>
  )
}
