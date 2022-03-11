import classnames from 'classnames'

import WrappedImage from 'main_app/components/WrappedImage'

import classes from './styles.module.scss'

function TextImageGeneric ({ title, content, imageURL, hideDecoration, withoutTestimonials }) {
  return (
    <section className={classnames(classes.sectionContainer, {
      [classes.removePadding]: !imageURL
    })}
    >
      {imageURL && <WrappedImage layout='responsive' src={imageURL} alt='' className={classes.image} />}
      <div className={classes.container}>
        <h3 className={classes.title}>{title}</h3>
        {content}
      </div>
    </section>
  )
}

export default TextImageGeneric
