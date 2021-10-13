import BgHireDevelopers from 'assets/hire_developers/backgrounds/bg_hire_developers.png'

import defaultContent from './default_content'

const hireDevelopers = {
  ...defaultContent,
  pathName: 'hire-developers',
  metadata: {
    title: 'IT Staffing Agency',
    description: 'Hire Developers and Development Teams.'
  },
  header: {
    landingName: <>hire developers</>,
    title: <>Hire Developers and Development Teams</>,
    description: (
      <>
        <p>Hire Top Web Developers without the hassles.</p>
      </>
    ),
    sideImageURL: BgHireDevelopers,
    backgroundColor: '#8224E3'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get profiles',
      title: 'Get Developer Profiles',
      description: 'Fill out the form and Get Developer Profiles and Developer Rates.'
    },
    formOrigin: 'hire-developers',
    formButtonText: 'Get profiles and rates'
  }
}

export default hireDevelopers
