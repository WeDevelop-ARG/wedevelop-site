import ChecklistIcon from 'assets/how_does_it_works/icons/checklist_icon.svg'
import SelectionIcon from 'assets/how_does_it_works/icons/selection_icon.svg'
import InterviewsIcon from 'assets/how_does_it_works/icons/interviews_icon.svg'
import OnboardingIcon from 'assets/how_does_it_works/icons/onboarding_icon.svg'

const steps = [
  {
    id: 1,
    icon: ChecklistIcon,
    title: 'Requirements',
    description: 'Fill out a form and let us know your needs.'
  },
  {
    id: 2,
    icon: SelectionIcon,
    title: 'Selection & Screening',
    description: 'We’ll get back to you within 1-2 hours to refine the Job description and present you some profiles from our Talent Pool.'
  },
  {
    id: 3,
    icon: InterviewsIcon,
    title: 'Interviews with the client',
    description: 'You’ll evaluate these candidates and interview the ones that you like the most.'
  },
  {
    id: 4,
    icon: OnboardingIcon,
    title: 'Onboarding!',
    description: 'Once you find the person you’re looking for, we’ll send you the contract and that’s it!.'
  }
]

const useStep = () => steps

export { useStep }
