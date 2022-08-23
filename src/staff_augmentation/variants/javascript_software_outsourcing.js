import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const javascriptSoftwareOutsourcing = {
  ...defaultContent,
  pathName: 'javascript-software-outsourcing',
  metadata: {
    title: 'Javascript Software Outsourcing',
    description: 'Senior Javascript services from Latin America. The top nearshore choice for Software Development.'
  },
  header: {
    landingName: <>Javascript-Service</>,
    title: <><b>Javascript Software Outsourcing</b></>,
    description: (
      <>
        <p>Senior Javascript services from Latin America.</p>
        <p>The top nearshore choice for Software Development.</p>
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

export default javascriptSoftwareOutsourcing
