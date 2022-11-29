import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'
import InternalLink from 'main_app/components/InternalLink'
import useIndustries from './industries'
import classes from './styles.module.scss'

export default function IndustriesAndCaseStudies () {
  const { industries } = useIndustries()

  return (
    <section className={classes.section}>
      <div className={classes.titleSection}>
        <h2>Industries & Case Studies</h2>
        <p className={classes.subtitle}>
          With deep-rooted know-how, we have +15 years of
          experience boosting tech projects across various industries
        </p>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.industriesContainer}>
        {industries.map(({ icon, name }, index) => (
          <div key={index} className={classes.industry}>
            <Image src={icon} alt={`${name}-icon`} className={classes.icon} />
            <span className={classes.name}>{name}</span>
          </div>
        ))}
      </div>
      <Button
        as={InternalLink}
        // this link will be changed
        // when success stories pages is redesigned
        href='/portfolio'
      >
        Check out our stories of success
      </Button>
      <div className={classes.background} />
    </section>
  )
}
