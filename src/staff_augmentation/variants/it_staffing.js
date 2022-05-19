import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import WeDevMeeting from 'assets/staff_augmentation/backgrounds/wedev_meeting.png'

import defaultContent from './default_content'

const itStaffing = {
  ...defaultContent,
  pathName: 'it-staffing',
  metadata: {
    title: 'IT Staff Augmentation',
    description: 'Hire the best Software Developers from Latin America.'
  },
  header: {
    landingName: <>IT Staffing</>,
    title: <>IT Staff Augmentation</>,
    description: (
      <>
        <p>Hire the best Developers from Latin America.</p>
        <p>Access outstanding quality results and lower your costs, while focusing on your core business.</p>
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
      ctaDescription: 'How can we help you?',
      buttonLabel: 'Get in touch'
    }
  },
  backgrounds: {
    firstBackground: WeDevLaptops,
    secondBackground: WeDevMeeting
  },
  reviewsHeading: {
    title: 'Don\' take our word for it',
    description: '',
    buttonText: 'Get in touch'
  },
  fullSizeCTA: {
    title: 'Ready to grow your tech team?',
    subTitle: 'GET IN TOUCH NOW',
    ctaText: 'Get in touch',
    ctaToPath: '#top',
    description: 'At WeDevelop, we are the expert partner you need to deliver scalable, innovative, and competitive results.'
  }
}

export default itStaffing
