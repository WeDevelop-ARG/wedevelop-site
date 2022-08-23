import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const javascriptSoftwareOutsourcing = {
  ...defaultContent,
  pathName: 'javascript-software-outsourcing',
  metadata: {
    title: 'JavaScript Software Outsourcing',
    description: 'Senior JavaScript services from Latin America. The top nearshore choice for Software Development.'
  },
  header: {
    landingName: <>JavaScript-Service</>,
    title: <><b>JavaScript Software Outsourcing</b></>,
    description: (
      <>
        <p>Senior JavaScript services from Latin America.</p>
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
