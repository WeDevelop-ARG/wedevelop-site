import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const nodejsDevelopers = {
  ...defaultContent,
  pathName: 'nodejs-developers',
  metadata: {
    title: 'Looking for NodeJS developers?',
    description: 'Hire the best NodeJS engineers from Latin America. The top nearshore services to boost your software development.'
  },
  header: {
    landingName: <>NodeJS-People</>,
    title: <><b>Looking for NodeJS developers?</b></>,
    description: (
      <>
        <p>Hire the best NodeJS engineers from Latin America.</p>
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

export default nodejsDevelopers
