import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import WeDevMeeting from 'assets/staff_augmentation/backgrounds/wedev_meeting.png'

import defaultContent from './default_content'

const nearshoreSoftwareOutsourcing = {
  ...defaultContent,
  pathName: 'nearshore-software-outsourcing',
  metadata: {
    title: 'Nearshore Outsourcing',
    description: 'Outsource to Latin America - the top offshore choice.'
  },
  header: {
    landingName: <>Nearshore Software Outsourcing</>,
    title: <><b>Nearshore</b> Software Outsourcing</>,
    description: (
      <>
        <p>Hire the best Developers from Latin America.</p>
        <p>The top offshore choice for Software Development.</p>
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
      ctaDescription: 'How can we help you?',
      buttonLabel: 'Get in touch'
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
    title: 'Outsourcing done well',
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
