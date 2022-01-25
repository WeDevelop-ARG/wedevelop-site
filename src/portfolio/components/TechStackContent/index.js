import classes from './styles.module.scss'

function TechStackContent({ title, content }) {
  return (
    <section className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.sectionContent}>{content}</p>
    </section>
  )
}

export default TechStackContent
