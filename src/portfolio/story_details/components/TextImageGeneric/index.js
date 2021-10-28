import classnames from 'classnames'

import Image from 'main_app/components/Image'

import classes from './styles.module.scss'

function TextImageGeneric ({ title, content, imageURL, hideDecoration }) {
  return (
    <section className={classnames(classes.sectionContainer, { [classes.hideDeco]: hideDecoration })}>
      <Image src={imageURL} alt='' className={classes.image} />
      <div className={classes.container}>
        <h3 className={classes.title}>{title}</h3>
        {content}
      </div>
      {!hideDecoration &&
        <>
          <div className={classes.filledCircle} aria-hidden />
          <div className={classes.emptyCircle} aria-hidden />
          <div className={classes.smallBlurCircle} aria-hidden />
        </>}
    </section>
  )
}

export default TextImageGeneric
