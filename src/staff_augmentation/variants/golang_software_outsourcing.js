import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const golangSoftwareOutsourcing = {
  ...defaultContent,
  pathName: 'golang-software-outsourcing',
  metadata: {
    title: 'Golang Software Outsourcing',
    description: 'Senior Golang services from Latin America. The top nearshore choice for Software Development.'
  },
  header: {
    landingName: <>Golang-Services</>,
    title: <><b>Golang Software Outsourcing</b></>,
    description: (
      <>
        <p>Senior Golang services from Latin America.</p>
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

export default golangSoftwareOutsourcing
