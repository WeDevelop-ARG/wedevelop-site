import classes from '../components/webDevDetails.module.scss'

const servicesList = [
  {
    name: 'Project management'
  },
  {
    name: 'UX Research'
  },
  {
    name: 'UI/UX Design'
  },
  {
    name: 'End to End Development'
  },
  {
    name: 'QA'
  },
  {
    name: 'Maintenance'
  },
  {
    name: 'Business Analysis'
  }
]

const DescriptionText = () => {
  return (
    <>
      <p className={classes.descriptionText}>
        <strong>Agile Web Development, no waste</strong>, continuous improvement, collaboration, and respect for people.
      </p>
      <p className={classes.descriptionText}>
        Whether you need a new website, a web portal to help your employees, or an app to automate processes, our developers have the expertise and experience to build it quickly and keep it aligned with your vision.
      </p>
    </>
  )
}

const useWebDevDetails = () => {
  return {
    servicesList,
    DescriptionText
  }
}

export { useWebDevDetails }
