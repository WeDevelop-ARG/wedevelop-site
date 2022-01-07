import BgWebProgrammers from 'assets/web_developers/backgrounds/bg_web_developers.png'

import defaultContent from './default_content'

const webProgrammers = {
  ...defaultContent,
  pathName: 'web-programmers',
  metadata: {
    title: 'Web Development Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    navBar: {
      ...defaultContent.header.navBar
    },
    landingName: <>web programmers</>,
    title: <>Top notch <b>Web Programmers</b></>,
    description: (
      <>
        <p>Hire Web Programmers without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>Web Programming Services</b>? 
      </>
    ),
    sideImageURL: BgWebProgrammers,
    backgroundColor: '#361989'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Get Web Programmer profiles',
      description: 'Fill out the form and receive a list of vetted Web Programmers.'
    },
    formOrigin: 'web-programmers',
    formButtonText: 'Get Web Programmer profiles'
  }
}

export default webProgrammers
