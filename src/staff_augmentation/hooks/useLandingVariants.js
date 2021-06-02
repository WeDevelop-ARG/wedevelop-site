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
  }
}]

function useLandingVariants () {
  return {
    variants
  }
}

export default useLandingVariants
