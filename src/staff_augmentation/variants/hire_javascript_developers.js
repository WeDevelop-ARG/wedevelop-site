import BgHireDevelopers from 'assets/hire_developers/backgrounds/bg_hire_developers.png'

import defaultContent from './default_content'

const hireJavascriptDevelopers = {
  ...defaultContent,
  pathName: 'hire-javascript-developers',
  metadata: {
    title: 'IT Staffing Agency',
    description: 'Hire Javascript Developers.'
  },
  header: {
    navBar: {
      ...defaultContent.header.navBar
    },
    landingName: <>hire developers</>,
    title: <>Hire Javascript Developers</>,
    description: (
      <>
        <p>Hire Javascript Developers without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>JavaScript Development Services</b>?
      </>
    ),
    sideImageURL: BgHireDevelopers,
    backgroundColor: '#8224E3'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get profiles',
      title: 'Get Javascript Developer Profiles',
      description: 'Fill out the form and Get Javascript Developer Profiles and Rates.'
    },
    formOrigin: 'hire-javascript-developers',
    formButtonText: 'Get profiles and rates'
  }
}

export default hireJavascriptDevelopers
