import TechSolutions from '../TechSolutions'
import useTechSolutions from '../../../hooks/useTechSolutions'

import classes from './styles.module.scss'

function DeliverTechSolutions () {
  const techSolutions = useTechSolutions()

  return (
    <section className={classes.techSolutionsSection}>
      {techSolutions.map(({
        id,
        imageURL,
        title,
        imageContainer,
        description
      }, index) => (
        <TechSolutions
          key={id}
          imageURL={imageURL}
          title={title}
          imageContainer={imageContainer}
          description={description}
          imageAtRight={index % 2 !== 0}
        />
      ))}
    </section>
  )
}

export default DeliverTechSolutions
