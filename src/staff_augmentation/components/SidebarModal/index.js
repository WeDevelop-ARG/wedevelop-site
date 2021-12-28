import classes from './styles.module.scss'
import classNames from 'classnames'
import AvatarNahuel from 'assets/staff_augmentation/members/nahuel.png'
import AvatarFederica from 'assets/staff_augmentation/members/federica.png'
import AvatarRicardo from 'assets/staff_augmentation/members/ricardo.png'
import { ReactComponent as ModalShape } from 'assets/staff_augmentation/modal_shape.svg'
import ModalDotsPattern from 'assets/staff_augmentation/modal_dots_pattern.svg'
import Image from 'main_app/components/Image'

export default function SidebarModal({ className, content }) {
  const containerClass = classNames(classes.rightSideContent, className)

  return (
    <aside className={containerClass}>
      <ModalShape className={classes.modalDecoration} />
      <Image src={ModalDotsPattern} className={classes.modalDotsPattern} />
      <div className={classes.content}>
        <p className={classes.whatsNext}>What's next?</p>
        <p className={classes.rightSideText}>
          {content}
        </p>
        <div className={classes.avatars}>
          <Image src={AvatarRicardo} alt="Ricardo's avatar" />
          <Image src={AvatarFederica} alt="Federica's avatar" />
          <Image src={AvatarNahuel} alt="Nahuel's avatar" />
        </div>
      </div>
    </aside>
  )
}