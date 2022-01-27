import classes from './styles.module.scss'

function TechStackTexts ({ title, content }) {
  return (
    <section className={classes.techStackSection}>
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.listSkills}>{content}</p>
      </div>
    </section>
  )
}

export default TechStackTexts
