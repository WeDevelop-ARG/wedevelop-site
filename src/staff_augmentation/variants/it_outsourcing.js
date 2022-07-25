import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import WeDevMeeting from 'assets/staff_augmentation/backgrounds/wedev_meeting.png'

import defaultContent from './default_content'

const itOutsourcing = {
  ...defaultContent,
  pathName: 'it-outsourcing',
  metadata: {
    title: 'The Top IT Outsourcing Company',
    description: 'Talent that delivers like your dream team would, without the hassles of hiring.'
  },
  header: {
    landingName: <>IT Outsourcing</>,
    title: <><b>Trusted and Efficient</b><br />IT Outsourcing for you</>,
    description: (
      <>
        <p>Boost Your Projects with the best LatAm IT talent.</p>
        <p>Fast and at your same time-zone.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>IT Outsourcing</b> services?
      </>
    ),
    sideImageURL: BgStaffAugmentation,
    backgroundColor: '#377DFF',
    navBar: {
      ctaDescription: 'How can we help you?',
      buttonLabel: 'Get in touch'
    }
  },
  backgrounds: {
    firstBackground: WeDevLaptops,
    secondBackground: WeDevMeeting
  },
  reviewsHeading: {
    title: 'Here\'s what our customers say about our IT Outsourcing services',
    description: '',
    buttonText: 'Get in touch'
  },
  fullSizeCTA: {
    title: 'Ready to outsource your software development?',
    subTitle: 'GET IN TOUCH NOW',
    ctaText: 'Get in touch',
    ctaToPath: '#top',
    description: 'At WeDevelop, we are the expert partner you need to deliver scalable, innovative, and competitive results.'
  }
}

export default itOutsourcing
