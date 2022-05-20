import TrainWithLogo from 'assets/staff_augmentation/testimonials/trainwith-logo.png'
import TrainWithPicture from 'assets/staff_augmentation/testimonials/trainwith-picture.png'
import BallWizLogo from 'assets/staff_augmentation/testimonials/ballwiz-logo.png'
import BallWizPicture from 'assets/staff_augmentation/testimonials/ballwiz-picture.png'
import InJobLogo from 'assets/staff_augmentation/testimonials/injob-logo.png'
import InJobPicture from 'assets/staff_augmentation/testimonials/injob-picture.png'
import RaftLogo from 'assets/staff_augmentation/testimonials/raft-logo.png'
import RaftPicture from 'assets/staff_augmentation/testimonials/raft-picture.png'
import MonedaLogo from 'assets/staff_augmentation/testimonials/moneda-logo.png'
import MonedaPicture from 'assets/staff_augmentation/testimonials/moneda-picture.png'

export const testimonials = [{
  id: '1',
  quote: 'They’re a well-rounded team, which is conducive to troubleshooting [and] having difficult conversations.',
  stars: 5,
  logo: TrainWithLogo,
  picture: TrainWithPicture,
  project: {
    type: 'App Development',
    company: 'Online Fitness Company'
  }
}, {
  id: '2',
  quote: 'They’re willing to engage with a problem to figure it out rather than waiting to be told what to do.',
  stars: 5,
  logo: BallWizLogo,
  picture: BallWizPicture,
  project: {
    type: 'Software Development',
    company: 'Sports Betting Startup'
  }
}, {
  id: '3',
  quote: 'The project cost about half of what it would have had we hired local engineers.',
  stars: 5,
  logo: MonedaLogo,
  picture: MonedaPicture,
  project: {
    type: 'Web App Development',
    company: 'Loan Company'
  }
}, {
  id: '4',
  quote: 'WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.',
  stars: 5,
  logo: RaftLogo,
  picture: RaftPicture,
  project: {
    type: 'Product Development',
    company: 'Ferry Booking Platform'
  }
}, {
  id: '5',
  quote: 'They are very understanding with us as it is our first time working with agile methodologies.',
  stars: 5,
  logo: InJobLogo,
  picture: InJobPicture,
  project: {
    type: 'Software Development',
    company: 'InJob Online'
  }
}]
