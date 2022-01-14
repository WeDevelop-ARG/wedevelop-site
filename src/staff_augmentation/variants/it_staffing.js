import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import WeDevMeeting from 'assets/staff_augmentation/backgrounds/wedev_meeting.png'

import defaultContent from './default_content'

const itStaffing = {
  ...defaultContent,
  pathName: 'it-staffing',
  metadata: {
    title: 'The Top IT Staffing Company',
    description: 'Talent that delivers like your dream team would, without the hassles of hiring.'
  },
  header: {
    landingName: <>IT Staffing</>,
    title: <>Boost Your Team With <b>Top-Notch Experts</b> From WeDevelop</>,
    description: (
      <>
        <p>Talent that delivers like your dream team would.</p>
        <p>Fast, without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>IT Staffing</b> services?
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
    title: 'Here\'s what our customers say about our IT Staffing services',
    description: '',
    buttonText: 'Get in touch'
  },
  fullSizeCTA: {
    title: 'Ready to grow your IT Staff?',
    subTitle: 'GET IN TOUCH NOW',
    ctaText: 'Get in touch',
    ctaToPath: '#top',
    description: 'At WeDevelop, we are the expert partner you need to deliver scalable, innovative, and competitive results.'
  }
}

export default itStaffing
