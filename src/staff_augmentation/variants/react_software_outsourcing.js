import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const reactSoftwareOutsourcing = {
  ...defaultContent,
  pathName: 'react-software-outsourcing',
  metadata: {
    title: 'React Software Outsourcing',
    description: 'Senior React services from Latin America. The top nearshore services to boost your software development.'
  },
  header: {
    landingName: <>React-Service</>,
    title: <><b>React Software Outsourcing</b></>,
    description: (
      <>
        <p>Senior React services from Latin America.</p>
        <p>The top nearshore services to boost your software development.</p>
      </>
    ),
    sideImageURL: BgStaffAugmentation,
    backgroundColor: '#377DFF',
    navBar: {
      ctaDescription: 'How can we help you?',
      buttonLabel: 'Get in touch'
    }
  }
}

export default reactSoftwareOutsourcing
