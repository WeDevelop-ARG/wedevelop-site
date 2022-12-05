import classes from './styles.module.scss'

export default function useProcessSteps () {
  return {
    steps: [
      {
        description: (
          <p className={classes.description}>
            You
            <span className={classes.boldText}>&nbsp;send us the job description&nbsp;</span>
            (or we can help you craft one)
          </p>
        )
      },
      {
        description: (
          <p className={classes.description}>
            We
            <span className={classes.boldText}>&nbsp;match&nbsp;</span>
            you with up to 3 expert developers
            <span className={classes.boldText}>&nbsp;within 48 hours&nbsp;</span>
          </p>
        )
      },
      {
        description: (
          <p className={classes.description}>
            <span className={classes.boldText}>Meet your next dev&nbsp;</span>
            and save time and money!
          </p>
        )
      }
    ]
  }
}
