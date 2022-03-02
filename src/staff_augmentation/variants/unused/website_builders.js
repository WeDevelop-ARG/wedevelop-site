import BgWebDevelopers from 'assets/web_developers/backgrounds/bg_web_developers.png'

import defaultContent from '../default_content'

const websiteBuilders = {
  ...defaultContent,
  pathName: 'website-builders',
  metadata: {
    title: 'Web Development Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    navBar: {
      ...defaultContent.header.navBar
    },
    landingName: <>website builders</>,
    title: <>Top notch <b>Website Builders</b></>,
    description: (
      <>
        <p>Hire Website Builders without the hassles.</p>
      </>
    ),
    quote: (
      <>
        Are you interested to learn more about our <b>Website Builder Services</b>?
      </>
    ),
    sideImageURL: BgWebDevelopers,
    backgroundColor: '#361989'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Get Website Builders profiles',
      description: 'Fill out the form and receive a list of vetted Website Builders.'
    },
    formOrigin: 'website-builders',
    formButtonText: 'Get Website Builders profiles'
  }
}

export default websiteBuilders
