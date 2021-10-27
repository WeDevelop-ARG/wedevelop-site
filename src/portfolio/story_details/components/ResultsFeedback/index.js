import Image from 'main_app/components/Image'

import classes from './styles.module.scss'

function ResultsFeedback ({ title, content, imageURL }) {
  return (
    <section className={classes.resultsFeedback}>
      <Image src={imageURL} alt='' className={classes.image} />
      <div className={classes.container}>
        <h3 className={classes.title}>{title}</h3>
        {content}
      </div>
      <div className={classes.filledCircle} aria-hidden />
      <div className={classes.emptyCircle} aria-hidden />
      <div className={classes.smallBlurCircle} aria-hidden />
    </section>
  )
}

export default ResultsFeedback
