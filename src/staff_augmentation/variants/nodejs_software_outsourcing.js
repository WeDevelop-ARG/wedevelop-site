import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const nodejsSoftwareOutsourcing = {
  ...defaultContent,
  pathName: 'nodejs-software-outsourcing',
  metadata: {
    title: 'Node.js Software Outsourcing',
    description: 'Senior Node.js services from Latin America. The top nearshore services to boost your software development.'
  },
  header: {
    landingName: <>Node.js-Service</>,
    title: <><b>Node.js Software Outsourcing</b></>,
    description: (
      <>
        <p>Senior Node.js services from Latin America.</p>
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

export default nodejsSoftwareOutsourcing
