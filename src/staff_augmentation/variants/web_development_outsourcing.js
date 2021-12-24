import BgWebDevelopers from 'assets/web_developers/backgrounds/bg_web_developers.png'

import defaultContent from './default_content'

const webDevelopmentOutsourcing = {
  ...defaultContent,
  pathName: 'web-development-outsourcing',
  metadata: {
    title: 'Web Development Outsourcing Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    landingName: <>web development outsourcing</>,
    title: <>Top notch <b>Web Development Outsourcing</b></>,
    description: (
      <>
        <p>Outsource web development without the hassles.</p>
      </>
    ),
    sideImageURL: BgWebDevelopers,
    backgroundColor: '#361989'
  },
  freeQuoteForm: {
    ...defaultContent.freeQuoteForm,
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Outsource Web Development',
      description: 'Fill out the form and receive a list of vetted Web Developers.'
    },
    formOrigin: 'web-developers',
    formButtonText: 'Outsource Web Development'
  }
}

export default webDevelopmentOutsourcing
