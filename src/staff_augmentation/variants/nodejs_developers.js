import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const nodejsDevelopers = {
  ...defaultContent,
  pathName: 'nodejs-developers',
  metadata: {
    title: 'Looking for Node.js engineers?',
    description: 'Hire the best Node.js engineers from Latin America. The top nearshore services to boost your software development.'
  },
  header: {
    landingName: <>Node.js-People</>,
    title: <><b>Looking for Node.js engineers?</b></>,
    description: (
      <>
        <p>Hire the best Node.js engineers from Latin America.</p>
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
