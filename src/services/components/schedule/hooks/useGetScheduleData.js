import WebDevTitleDescription from '../components/WebDevTitleDescription'
import StaffAugTitleDescription from '../components/StaffAugTitleDescription'
import HowWeHireTitleDescription from '../components/HowWeHireTitleDescription'

export default function useGetScheduleData (service) {
  const renderTitleDescription = () => {
    if (service === 'staff-augmentation') return (<StaffAugTitleDescription />)
    else if (service === 'how-we-hire') return (<HowWeHireTitleDescription />)
    return (<WebDevTitleDescription />)
  }

  const getHeadingText = () => {
    if (service === 'staff-augmentation') return 'Contact us!'
    return 'Get in touch'
  }

  const getCTAText = () => {
    if (service === 'staff-augmentation') return 'Let\'s build my team'
    return 'Get in Touch'
  }

  return {
    renderTitleDescription,
    getHeadingText,
    getCTAText
  }
}
