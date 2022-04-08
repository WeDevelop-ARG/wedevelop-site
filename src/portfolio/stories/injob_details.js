import InjobMobileHeader from 'assets/portfolio/injob/mobile_header_background.png'
import InjobHeader from 'assets/portfolio/injob/header_background.png'
import InjobLogo from 'assets/portfolio/injob/injob_logo.png'
import InjobCoworking from 'assets/portfolio/injob/injob_coworking.png'
import InjobOverview from 'assets/portfolio/injob/injob_overview.png'
import TestimonialsImage from 'assets/portfolio/injob/testimonials_default_image.png'
import InjobResumeBackground from 'assets/portfolio/injob/resume_background.png'
import TypeScript from 'assets/portfolio/tech_stack/typescript.svg'
import Node from 'assets/portfolio/tech_stack/node.svg'
import React from 'assets/portfolio/tech_stack/react.svg'
import GraphQL from 'assets/portfolio/tech_stack/graphql.svg'
import PostgreSQL from 'assets/portfolio/tech_stack/postgresql.svg'
import GoogleCloud from 'assets/portfolio/tech_stack/googlecloud.svg'
import Firebase from 'assets/portfolio/tech_stack/firebase.svg'
import Terraform from 'assets/portfolio/tech_stack/terraform.svg'

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
      'The shift to online and remote work keeps accelerating year by year, connecting businesses with a wealth of benefits. With InJob, our client had the vision of empowering freelancers and making it easier for them to connect and work together with clients.',
    imageURL: InjobCoworking
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          The goal for this project was to develop an intuitive and dynamic platform.
          This platform would be a professional ecosystem for the community of entrepreneurs,
          freelancers, and clients, it needed to support their comprehensive connection, protection, management,
          and accessibility.
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
          Together with our client, we successfully developed and finished
          a web-based platform. This provided an environment where users could find the best freelancers
          to carry out projects, drawing on efficient management tools and compatibility algorithms.
        </p>
        <p>
          Within the platform, users can find projects, services, or freelancers. We developed
          an interface that allows users to act as both clients and freelancers within
          the same account, working with both services and projects. It also supports searching
          and filtering by category, assessment, or location. Users can
          communicate in real time via a live chat feature.
        </p>
        <p>
          All of this was achieved by applying an Agile methodology in which we had a small
          but functional piece of software ready for deployment and client assessment after
          every 2-week sprint. That’s our most important metric — functional software delivery.
        </p>
        <p>
          We provided a cross-functional team of talented personnel, working on a consistent
          development cycle that allowed us to deliver on every sprint. In
          addition, we held frequent meetings with the client, assessing our progress
          and reaffirming their expectations before moving forward.
        </p>
      </>
    ),
    imageURL: InjobOverview
  },
  techStackContent: [],
  techStackIcons: [
    {
      id: '1',
      name: 'TypeScript',
      photo: TypeScript
    },
    {
      id: '2',
      name: 'Node.js',
      photo: Node
    },
    {
      id: '3',
      name: 'React',
      photo: React
    },
    {
      id: '4',
      name: 'GraphQL',
      photo: GraphQL
    },
    {
      id: '5',
      name: 'PostgreSQL',
      photo: PostgreSQL
    },
    {
      id: '6',
      name: 'Google Cloud',
      photo: GoogleCloud
    },
    {
      id: '7',
      name: 'Firebase',
      photo: Firebase
    },
    {
      id: '8',
      name: 'Terraform',
      photo: Terraform
    }
  ],
  reviewedOnClutch: true
}

export default injobDetails
