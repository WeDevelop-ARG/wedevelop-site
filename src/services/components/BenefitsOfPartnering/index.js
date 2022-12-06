import useGetBenefitsOfPartnering from 'services/hooks/useGetBenefitsOfPartnering'

import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'

import BackgroundImage from 'assets/services/benefits/background.component.svg'

import classes from './styles.module.scss'

export default function BenefitsOfPartnering ({ contactPagePath }) {
  const { benefits } = useGetBenefitsOfPartnering()

  return (
    <section className={classes.container}>
      <BackgroundImage className={classes.background} viewBox='0 0 1680 896' preserveAspectRatio='xMidYMid slice' />
      <div className={classes.header}>
        <h2 className={classes.titleText}>Key Benefits Of Partnering With WeDevelop</h2>
        <p className={classes.descriptionText}>
          At WeDevelop, we embrace innovation using
          the most efficient IT staff augmentation
          methodologies for a seamless recruiting process.
        </p>
        <hr className={classes.horizontalBar} />
        <Button
          as={InternalLink}
          href={contactPagePath}
          isAnchor
          variant='primary'
          className={classes.button}
          link={{ scroll: false, shallow: true }}
        >
          Schedule a call
        </Button>
      </div>
      <div className={classes.content}>
        <ul className={classes.list}>
          {benefits.map(({ id, text }) => (
            <li key={id} className={classes.item}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
