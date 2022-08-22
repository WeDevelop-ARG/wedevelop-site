import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'

import defaultContent from './default_content'

const phpDevelopers = {
  ...defaultContent,
  pathName: 'php-developers',
  metadata: {
    title: 'Looking for PHP developers?',
    description: 'Hire the best PHP engineers from Latin America. The top nearshore services to boost your software development.'
  },
  header: {
    landingName: <>PHP-People</>,
    title: <><b>Looking for PHP developers?</b></>,
    description: (
      <>
        <p>Hire the best PHP engineers from Latin America.</p>
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

export default phpDevelopers
