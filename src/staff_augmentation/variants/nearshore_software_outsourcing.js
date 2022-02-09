import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import WeDevMeeting from 'assets/staff_augmentation/backgrounds/wedev_meeting.png'

import defaultContent from './default_content'

const nearshoreSoftwareOutsourcing = {
  ...defaultContent,
  pathName: 'nearshore-software-outsourcing',
  metadata: {
    title: 'Tech Talent That Delivers Like Your Dream Team Would',
    description: 'Our experienced engineering teams deliver dream-team outcomes, without the hassles of hiring.'
  },
  header: {
    landingName: <>Nearshore Software Outsourcing</>,
    title: <>Available <b>Nearshore Talent</b> for you</>,
    description: (
      <>
        <p>Get access to the top Software Engineers in LATAM.</p>
        <p>Fast, without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>Nearshore Software Outsourcing</b> services?
      </>
    ),
    sideImageURL: BgStaffAugmentation,
    backgroundColor: '#377DFF',
    navBar: {
      ctaDescription: 'Schedule a 15-minute consultation',
      buttonLabel: 'Schedule a call'
    }
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Sign Up to Get Rates & Available Staff Details',
      description: 'We look forward to learning how WeDevelop can help you and your business.'
    },
    formOrigin: 'nearshore-software-outsourcing',
    formButtonText: 'Get in touch'
  },
  backgrounds: {
    firstBackground: WeDevLaptops,
    secondBackground: WeDevMeeting
  },
  hideHowDoesItWork: true,
  reviewsHeading: {
    title: 'Here\'s what our customers say about our Nearshore services',
    description: '',
    buttonText: 'Get a Free Quote'
  },
  fullSizeCTA: {
    title: 'Ready to outsource your software development?',
    subTitle: 'GET IN TOUCH NOW',
    ctaText: 'Get in touch',
    ctaToPath: '#top',
    description: 'At WeDevelop, we are the expert partner you need to deliver scalable, innovative, and competitive results.'
  }
}

export default nearshoreSoftwareOutsourcing
