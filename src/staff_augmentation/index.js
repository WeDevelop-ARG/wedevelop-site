import { useRouter } from 'next/router'

import useLandingVariants from './hooks/useLandingVariants'

import LandingPage from './landing_page'

function StaffAugmentation () {
  const { query } = useRouter()

  return <LandingPage landingName={query.pathName} />
}

export default StaffAugmentation
