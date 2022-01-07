import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import WeDevMeeting from 'assets/staff_augmentation/backgrounds/wedev_meeting.png'

import defaultContent from './default_content'

const softwareDevelopment = {
  ...defaultContent,
  pathName: 'software-development',
  metadata: {
    title: 'Top Software Development Company',
    description: 'Our experienced Engineering Teams deliver dream-team outcomes, without the hassles of hiring.'
  },
  header: {
    landingName: <>Software Development</>,
    title: <>Hire the <b>best Engineering Teams</b></>,
    description: (
      <>
        <p>Get access to the top Software Developers in LATAM.</p>
        <p>Fast, without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>Software Development</b> services?
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
    title: 'Ready to outsource your Software Development?',
    subTitle: 'GET IN TOUCH NOW',
    ctaText: 'Get in touch',
    ctaToPath: '#top',
    description: 'At WeDevelop, we are the expert partner you need to deliver scalable, innovative, and competitive results.'
  }
}

export default softwareDevelopment
