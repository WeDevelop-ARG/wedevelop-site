import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const reactDevelopers = {
  ...defaultContent,
  pathName: 'react-developers',
  metadata: {
    title: 'Looking for React developers?',
    description: 'Hire the best React engineers from Latin America. The top nearshore services to boost your software development.'
  },
  header: {
    landingName: <>React-People</>,
    title: <><b>Looking for React developers?</b></>,
    description: (
      <>
        <p>Hire the best React engineers from Latin America.</p>
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

export default reactDevelopers
