import BgWebDevelopers from 'assets/web_developers/backgrounds/bg_web_developers.png'

import defaultContent from './default_content'

const webDevelopers = {
  ...defaultContent,
  pathName: 'web-developers',
  metadata: {
    title: 'Web Development Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    navBar: {
      ...defaultContent.header.navBar
    },
    landingName: <>web developers</>,
    title: <>Top notch <b>Web Developers</b></>,
    description: (
      <>
        <p>Hire Web Developers without the hassles.</p>
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
      title: 'Get Web Developer profiles',
      description: 'Fill out the form and receive a list of vetted Web Developers.'
    },
    formOrigin: 'web-developers',
    formButtonText: 'Get Web Developer profiles'
  }
}

export default webDevelopers
