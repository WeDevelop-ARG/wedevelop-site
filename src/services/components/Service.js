import { useRouteMatch } from 'react-router-dom'
import WebDevelopment from './WebDevelopment'
import StaffAugmentation from './StaffAugmentation'

function Service() {
  const match = useRouteMatch('/services/:service')
  const isWebDevelopment = match.params.service === 'web-development'
  const isStaffAugmentation = match.params.service === 'staff-augmentation'

  return (
    <>
      { isWebDevelopment && <WebDevelopment />}
      { isStaffAugmentation && <StaffAugmentation />}
    </>
  )

}

export default Service
