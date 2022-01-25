import classnames from 'classnames'

import Image from 'main_app/components/Image'

import classes from './styles.module.scss'

function TextImageGeneric ({ title, content, imageURL, hideDecoration, withoutTestimonials }) {
  return (
    <section className={classnames(classes.sectionContainer, {
      [classes.removePadding]: !imageURL
    })}
    >
      <Image src={imageURL} alt='' className={classes.image} />
      <div className={classes.container}>
        <h3 className={classes.title}>{title}</h3>
        {content}
      </div>
    </section>
  )
}

export default TextImageGeneric
