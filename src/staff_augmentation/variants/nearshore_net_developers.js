import BgHireDevelopers from 'assets/hire_developers/backgrounds/bg_hire_developers.png'

import defaultContent from './default_content'

const nearshoreNetDevelopers = {
  ...defaultContent,
  pathName: 'nearshore-net-developers',
  metadata: {
    title: 'IT Staffing Agency',
    description: 'Hire .NET Developers.'
  },
  header: {
    navBar: {
      ...defaultContent.header.navBar
    },
    landingName: <>hire developers</>,
    title: <>Hire Nearshore .NET Developers</>,
    description: (
      <>
        <p>Hire Nearshore .NET Developers without the hassles.</p>
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
      title: 'Get Nearshore .NET Developer Profiles',
      description: 'Fill out the form and Get Nearshore .NET Developer Profiles and Rates.'
    },
    formOrigin: 'hire-net-developers',
    formButtonText: 'Get profiles and rates'
  }
}

export default nearshoreNetDevelopers
