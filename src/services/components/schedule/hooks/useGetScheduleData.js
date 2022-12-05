import WebDevTitleDescription from '../components/WebDevTitleDescription'
import StaffAugTitleDescription from '../components/StaffAugTitleDescription'
import HowWeHireTitleDescription from '../components/HowWeHireTitleDescription'
import OurTechsTitleDescription from '../components/OurTechsTitleDescription'

export default function useGetScheduleData (page) {
  const renderTitleDescription = () => {
    if (page === 'staff-augmentation') return (<StaffAugTitleDescription />)
    else if (page === 'how-we-hire') return (<HowWeHireTitleDescription />)
    else if (page === 'our-technologies') return (<OurTechsTitleDescription />)
    return (<WebDevTitleDescription />)
  }

  const getHeadingText = () => {
    if (page === 'staff-augmentation' || page === 'our-technologies') return 'Contact us!'
    return 'Get in touch'
  }

  const getCTAText = () => {
    if (page === 'staff-augmentation') return 'Let\'s build my team'
    if (page === 'our-technologies') return 'Contact us'
    return 'Get in Touch'
  }

  return {
    renderTitleDescription,
    getHeadingText,
    getCTAText
  }
}
