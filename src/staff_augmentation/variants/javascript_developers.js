import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const javascriptDevelopers = {
  ...defaultContent,
  pathName: 'javascript-developers',
  metadata: {
    title: 'Looking for JavaScript developers?',
    description: 'Hire the best JavaScript engineers from Latin America. The top nearshore services to boost your software development.'
  },
  header: {
    landingName: <>JavaScript-People</>,
    title: <><b>Looking for JavaScript developers?</b></>,
    description: (
      <>
        <p>Hire the best JavaScript engineers from Latin America.</p>
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

export default javascriptDevelopers
