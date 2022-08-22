import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const phpSoftwareOutsourcing = {
  ...defaultContent,
  pathName: 'php-software-outsourcing',
  metadata: {
    title: 'PHP Software Outsourcing',
    description: 'Senior PHP services from Latin America. The top nearshore services to boost your software development.'
  },
  header: {
    landingName: <>PHP-Service</>,
    title: <><b>PHP Software Outsourcing</b></>,
    description: (
      <>
        <p>Senior PHP services from Latin America.</p>
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

export default phpSoftwareOutsourcing
