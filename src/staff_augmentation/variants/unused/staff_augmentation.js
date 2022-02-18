import BgStaffAugmentation from 'assets/staff_augmentation/backgrounds/bg_staff_augmentation.png'
import StaffAugScreen from 'assets/staff_augmentation/backgrounds/staff_aug_screen.png'
import WeDevMeeting from 'assets/staff_augmentation/backgrounds/wedev_meeting.png'

import defaultContent from '../default_content'

const staffAugmentation = {
  ...defaultContent,
  pathName: 'staff-augmentation',
  metadata: {
    title: 'Nearshore IT Staff Augmentation company',
    description: 'Add the right Talent for your time in no time. Get a free quote in the next hour!'
  },
  header: {
    navBar: {
      ...defaultContent.header.navBar
    },
    landingName: <>staff augmentation</>,
    title: <>The <b>right IT Staff Augmentation</b> agency</>,
    description: (
      <>
        <p>Get access to the top Software Engineers in Latin America.</p>
        <p>Fast, without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>Staff Augmentation Services</b>?
      </>
    ),
    sideImageURL: BgStaffAugmentation,
    backgroundColor: '#377DFF'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Sign Up to Get Rates & Available Staff Details',
      description: 'We look forward to learning how WeDevelop can help you and your business.'
    },
    formOrigin: 'staff-augmentation',
    formButtonText: 'Get a free quote'
  },
  backgrounds: {
    firstBackground: StaffAugScreen,
    secondBackground: WeDevMeeting
  }
}

export default staffAugmentation
