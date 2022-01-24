import InjobMobileHeader from 'assets/portfolio/injob/mobile_header_background.png'
import InjobHeader from 'assets/portfolio/injob/header_background.png'
import InjobLogo from 'assets/portfolio/injob/injob_logo.png'
import InjobCoworking from 'assets/portfolio/injob/injob_coworking.png'
import InjobOverview from 'assets/portfolio/injob/injob_overview.png'
import TestimonialsImage from 'assets/portfolio/injob/testimonials_default_image.png'
import InjobResumeBackground from 'assets/portfolio/injob/resume_background.png'

const injobDetails = {
  urlName: 'injob',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for INJOB'
  },
  resume: {
    headerImageURL: InjobResumeBackground
  },
  header: {
    backgroundURL: InjobHeader,
    mobileBackgroundURL: InjobMobileHeader,
    logoURL: InjobLogo,
    logoBackground: '#FFFFFF',
    heading: 'Success Story',
    title: 'InJob Online',
    subtitle: 'A web platform to connect top talent with clients',
    tags: ['Marketplace'],
    description:
      'Year by year the online and remote work keep increasing, and people keep figuring the benefits it has. So with InJob our client had the vision of increasing the power of freelancers and to make it easier for them and their clients to connect and work together.',
    websiteURL: 'https://injobonline.com/',
    imageURL: InjobCoworking
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          To develop a really easy and dynamic platform as a professional
          ecosystem for the community of entrepreneurs, freelancers and clients
          through a comprehensive connection, protection, management and
          accessibility solution.
        </p>
      </>
    )
  },
  testimonials: [
    {
      profileImageURL: TestimonialsImage,
      name: '',
      quote:
        'They are very understanding with us as it is our first time working with agile methodologies.',
      position: 'Founder & Investor',
      company: 'InJob Online'
    }
  ],
  solution: {
    title: 'The Solution',
    content: (
      <>
        <p>
          We created a web-based platform that was developed and finished
          successfully with our client, creating an environment where users can
          find the best freelancers and carry out projects with the help of
          efficient management tools and compatibility algorithms.
        </p>
        <p>
          In the platform you can find projects, services, or freelancers. We
          managed to allow the user to be either a client or a freelancer with
          the same account, and can post either a pack of service or a project.
          Also, it allows search and filtering by category, assessment or
          location. We also allow the user to communicate in real time with
          others with a live-chat feature.
        </p>
        <p>
          All of this was achieved by applying an Agile methodology in which we
          deployed and showed the client what we produce every 2-week Sprint, a
          small but functional piece of software. That’s our metric: functional
          software delivered.
        </p>
        <p>
          We provided a cross-functional highly talented team that pushed on a
          constant development cycle that allowed us to deliver consistently
          every sprint. We had several meetings with the client so we check all
          the time before moving forward to meet their needs and expectations.
        </p>
      </>
    ),
    imageURL: InjobOverview
  },
  techStackContent: []
}

export default injobDetails
