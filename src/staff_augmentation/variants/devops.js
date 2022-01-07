import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import WeDevMeeting from 'assets/staff_augmentation/backgrounds/wedev_meeting.png'

import defaultContent from './default_content'

const devOps = {
  ...defaultContent,
  pathName: 'devops',
  metadata: {
    title: 'Top DevOps Development Company',
    description: 'Our experienced DevOps engineering teams deliver dream-team outcomes, without the hassles of hiring.'
  },
  header: {
    landingName: <>DevOps | SRE</>,
    title: <>Hire the <b>best DevOps Engineering teams</b></>,
    description: (
      <>
        <p>Get access to the top DevOps engineers in LATAM.</p>
        <p>Fast, without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>DevOps</b> services?
      </>
    ),
    sideImageURL: BgStaffAugmentation,
    backgroundColor: '#377DFF',
    navBar: {
      ctaDescription: 'Schedule a 15-minute consultation',
      buttonLabel: 'Schedule a call'
    }
  },
  backgrounds: {
    firstBackground: WeDevLaptops,
    secondBackground: WeDevMeeting
  },
  reviewsHeading: {
    title: 'Here\'s what our customers say about our services',
    description: '',
    buttonText: 'Get in touch'
  },
  fullSizeCTA: {
    title: 'Ready to outsource your DevOps development?',
    subTitle: 'GET IN TOUCH NOW',
    ctaText: 'Get in touch',
    ctaToPath: '#top',
    description: 'At WeDevelop, we are the expert partner you need to deliver scalable, innovative, and competitive results.'
  }
}

export default devOps
