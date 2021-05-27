import TechSolutions from '../TechSolutions'
import useTechSolutions from '../../../hooks/useTechSolutions'

import classes from './styles.module.scss'

function DeliverTechSolutions () {
  const techSolutions = useTechSolutions()
  return (
    <section className={classes.techSolutionsSection}>
      {techSolutions.map((
        {
          id,
          presentationPhotoURL,
          title,
          imageContainer,
          description
        }) => (
          <TechSolutions
            key={id}
            presentationPhotoURL={presentationPhotoURL}
            title={title}
            imageContainer={imageContainer}
            description={description}
          />))}
    </section>
  )
}

export default DeliverTechSolutions
