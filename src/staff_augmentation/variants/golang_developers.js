import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const golangDevelopers = {
  ...defaultContent,
  pathName: 'golang-developers',
  metadata: {
    title: 'Looking for Golang developers?',
    description: 'Hire the best Golang engineers from Latin America. The top nearshore services to boost your software development.'
  },
  header: {
    landingName: <>Golang-People</>,
    title: <><b>Looking for Golang developers?</b></>,
    description: (
      <>
        <p>Hire the best Golang engineers from Latin America.</p>
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

export default golangDevelopers
