import BrandGradient from 'main_app/components/TextGradient'
import AbelLaptop from 'assets/staff_augmentation/abel_laptop.png'

const variants = [{
  pathName: 'staff-augmentation',
  metadata: {
    title: 'IT Staff Augmentation delivered in 7 days',
    description: 'Stop Interviewing. Start making money. We send you rates and available team within the hour, and make the Staff available to start in 7 days.'
  },
  header: {
    title: <>Hire top web developers <BrandGradient>in 48h</BrandGradient></>,
    description: (
      <>
        <p>Get access to the top Software Engineers in Latin America.</p>
        <p>
          <b>
            Fast, without the hiring hassles.
          </b>
        </p>
      </>
    ),
    formDescription: 'Sign Up to Get Rates & Available Staff Details',
    sideImageURL: AbelLaptop
  },
  reviews: {
    title: 'The top IT Staff Augmentation Agency so they say...',
    reviews: [
      {
        quote: 'They’re a well-rounded team, which is conducive to troubleshooting [and] having difficult conversations.',
        stars: 5,
        project: 'App Development for Online Fitness Company'
      },
      {
        quote: 'They’re willing to engage with a problem to figure it out rather than waiting to be told what to do.',
        stars: 5,
        project: 'Software Development for Sports Betting Startup'
      },
      {
        quote: 'The project cost about half of what it would have had we hired local engineers.',
        stars: 5,
        project: 'Web App Development for Loan Company'
      },
      {
        quote: 'WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.',
        stars: 5,
        project: 'Product Development for Ferry Booking Platform'
      }
    ]
  }
}]

function useLandingVariants () {
  return {
    variants
  }
}

export default useLandingVariants
