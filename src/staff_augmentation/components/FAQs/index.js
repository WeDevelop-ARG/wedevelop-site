import Button from 'main_app/components/Button'
import WrappedImage from 'main_app/components/WrappedImage'
import Question from './components/Question'

import classes from './styles.module.scss'

export default function FrequentlyAskedQuestions ({
  icon,
  title,
  description,
  noAnswerCTA,
  onCTAClick,
  frequentlyQuestions
}) {
  console.log(frequentlyQuestions)
  return (
    <section id='frequently-asked-questions' className={classes.faqsSection}>
      <div className={classes.sectionHeader}>
        <WrappedImage src={icon} alt='' className={classes.headerIcon} />
        <h2 className={classes.titleText}>{title}</h2>
        <p className={classes.descriptionText}>{description}</p>
        <hr className={classes.horizontalBar} />
        <div className={classes.noAnswerCTA}>
          <p className={classes.description}>{noAnswerCTA.description}</p>
          <Button
            variant='secondary'
            onClick={onCTAClick}
            className={classes.CTAButton}
          >
            {noAnswerCTA.buttonText}
          </Button>
        </div>
      </div>
      <div className={classes.questionsList}>
        {frequentlyQuestions.map(({ id, question, answer }) => (
          <Question
            key={id}
            question={question}
            answer={answer}
          />
        ))}
      </div>
    </section>
  )
}
