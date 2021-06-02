import AbelLaptop from 'assets/staff_augmentation/abel_laptop.png'
import BrandGradient from 'main_app/components/TextGradient'

const TEXTS_HEADER = {
  title: <>Hire top web developers <BrandGradient>in 48h</BrandGradient></>,
  description: 'Get access to the top Software Engineers in Latin America.',
  highlightedText: 'Fast, without the hiring hassles.',
  availableDetails: 'Sign Up to Get Rates & Available Staff Details',
  subTextButton: 'We typically reply every email within an hour.',
  presentationPhotoURL: AbelLaptop
}

function useTextsHeader () {
  return TEXTS_HEADER
}

export default useTextsHeader
