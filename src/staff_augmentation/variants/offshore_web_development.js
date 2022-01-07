import BgWebDevelopers from 'assets/web_developers/backgrounds/bg_web_developers.png'

import defaultContent from './default_content'

const offshoreWebDevelopment = {
  ...defaultContent,
  pathName: 'offshore-web-development',
  metadata: {
    title: 'Offshore Web Development Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    navBar: {
      ...defaultContent.header.navBar
    },
    landingName: <>offshore web development</>,
    title: <>Top notch <b>Offshore Web Development</b></>,
    description: (
      <>
        <p>Hire Offshore Web Developers without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>Offshore Web Development</b>? 
      </>
    ),
    sideImageURL: BgWebDevelopers,
    backgroundColor: '#361989'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Get Offshore Web Development profiles',
      description: 'Fill out the form and receive a list of vetted Web Developers.'
    },
    formOrigin: 'web-developers',
    formButtonText: 'Get Offshore Web Development profiles'
  }
}

export default offshoreWebDevelopment
