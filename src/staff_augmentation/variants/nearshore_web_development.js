import BgWebDevelopers from 'assets/web_developers/backgrounds/bg_web_developers.png'

import defaultContent from './default_content'

const nearshoreWebDevelopment = {
  ...defaultContent,
  pathName: 'nearshore-web-development',
  metadata: {
    title: 'Nearshore Web Development Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    landingName: <>nearshore web development</>,
    title: <>Top notch <b>Nearshore Web Development</b></>,
    description: (
      <>
        <p>Hire Nearshore Web Developers without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>Web Development Services</b>? 
      </>
    ),
    sideImageURL: BgWebDevelopers,
    backgroundColor: '#361989'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Get Nearshore Web Development profiles',
      description: 'Fill out the form and receive a list of vetted Web Developers.'
    },
    formOrigin: 'web-developers',
    formButtonText: 'Get Nearshore Web Development profiles'
  }
}

export default nearshoreWebDevelopment
