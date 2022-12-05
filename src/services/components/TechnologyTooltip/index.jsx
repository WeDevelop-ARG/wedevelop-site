import Tooltip from 'main_app/components/Tooltip'
import Image from 'next/image'

import classes from './styles.module.scss'

export default function TechnologyTooltip (props) {
  const {
    image,
    title,
    description,
    children
  } = props

  return (
    <Tooltip
      placement='auto'
      trigger={['hover', 'focus']}
      overlay={(
        <div className={classes.technologyTooltipContainer}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout='fixed'
          />
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.description}>{description}</p>
        </div>
      )}
    >
      {children}
    </Tooltip>
  )
}
