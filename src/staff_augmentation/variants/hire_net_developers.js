import BgHireDevelopers from 'assets/hire_developers/backgrounds/bg_hire_developers.png'

import defaultContent from './default_content'

const hireNetDevelopers = {
  ...defaultContent,
  pathName: 'hire-net-developers',
  metadata: {
    title: 'IT Staffing Agency',
    description: 'Hire .NET Developers.'
  },
  header: {
    navBar: {
      ...defaultContent.header.navBar
    },
    landingName: <>hire developers</>,
    title: <>Hire .NET Developers</>,
    description: (
      <>
        <p>Hire .NET Developers without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>.NET Development Services</b>?
      </>
    ),
    sideImageURL: BgHireDevelopers,
    backgroundColor: '#8224E3'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get profiles',
      title: 'Get .NET Developer Profiles',
      description: 'Fill out the form and Get .NET Developer Profiles and Rates.'
    },
    formOrigin: 'hire-net-developers',
    formButtonText: 'Get profiles and rates'
  }
}

export default hireNetDevelopers
