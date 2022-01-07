import BgWebCoders from 'assets/web_developers/backgrounds/bg_web_developers.png'

import defaultContent from './default_content'

const webCoders = {
  ...defaultContent,
  pathName: 'web-coders',
  metadata: {
    title: 'Web Development Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    navBar: {
      ...defaultContent.header.navBar
    },
    landingName: <>web coders</>,
    title: <>Top notch <b>Web Coders</b></>,
    description: (
      <>
        <p>Hire Web Coders without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>Web Coders Services</b>? 
      </>
    ),
    sideImageURL: BgWebCoders,
    backgroundColor: '#361989'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Get Web Coder profiles',
      description: 'Fill out the form and receive a list of vetted Web Coders.'
    },
    formOrigin: 'web-coders',
    formButtonText: 'Get Web Coder profiles'
  }
}

export default webCoders
