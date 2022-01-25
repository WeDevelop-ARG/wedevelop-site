import RaftResumeBackground from 'assets/portfolio/raft/resume_background.png'
import RaftMobileHeader from 'assets/portfolio/raft/mobile_header_background.png'
import RaftHeader from 'assets/portfolio/raft/header_background.png'
import RaftLogo from 'assets/portfolio/raft/raft_logo.png'
import RaftReservations from 'assets/portfolio/raft/raft_reservations.png'
import TestimonialsImage from 'assets/portfolio/raft/raft_ceo.png'
import RaftOverview from 'assets/portfolio/raft/raft_overview.png'
import Node from 'assets/portfolio/tech_stack/node.svg'
import React from 'assets/portfolio/tech_stack/react.svg'
import GraphQL from 'assets/portfolio/tech_stack/graphql.svg'
import AWS from 'assets/portfolio/tech_stack/aws.svg'
import PostgreSQL from 'assets/portfolio/tech_stack/postgresql.svg'

const raftDetails = {
  urlName: 'raft',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for RAFT'
  },
  resume: {
    headerImageURL: RaftResumeBackground
  },
  header: {
    backgroundURL: RaftHeader,
    mobileBackgroundURL: RaftMobileHeader,
    logoURL: RaftLogo,
    logoBackground: '#FFFFFF',
    heading: 'Success Story',
    title: 'Raft',
    subtitle: 'A search engine for ferry booking.',
    tags: ['Travel', 'Booking'],
    description:
      'RAFT Croatia is a search engine for ferry bookings. RAFT’s mission is to make transportation between the islands and coastal cities of Croatia seamless, and stress free.',
    websiteURL: 'https://raftcroatia.com/',
    imageURL: RaftReservations
  },
  challenge: {
    title: 'Challenge',
    content: (
      <>
        <p>
          Ferry transportation is a pretty niche industry, and there is no
          search engine or metadata platform for it, either globally or in
          specific countries, so we had to build much of it on our own.
        </p>
        <p>
          We needed to design and implement platforms and tools both for
          passengers to buy ferry tickets and for ferry companies to manage
          their routes and operate their business in an easy way.
        </p>
      </>
    )
  },
  testimonials: [
    {
      profileImageURL: TestimonialsImage,
      name: '',
      quote:
        '“WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.”',
      position: 'CEO',
      company: 'RAFT'
    }
  ],
  solution: {
    title: 'The solution',
    content: (
      <>
        <h4>RAFT Croatia Online</h4>
        <ul>
          <li>
            Online Ferry Tickets Booking
            <p>
              Ability to search trips (one-way, round-trip, or multi-stop trips)
              and book them online.
            </p>
          </li>
          <li>
            Integration with Payment Gateways
            <p>Integration with Stripe and local payment gateways.</p>
          </li>
          <li>
            My account section
            <p>
              Allow the customer to create an account and access their
              information, see their trips, reschedule or cancel trips.
            </p>
          </li>
          <li>
            Active communication channels with customers
            <p>
              We integrated with SMS and Email providers to send notifications
              and other relevant information to the customers (booking
              confirmations, changes on schedule, etc).
            </p>
          </li>
        </ul>
        <h4>Biz Portal</h4>
        <ul>
          <li>
            POS - Point Of Sales
            <p>
              A tool for the Ferry companies to sell their tickets online, using
              RAFT’s POS.
            </p>
          </li>
          <li>
            Employee management
            <p>
              Enables the Ferry companies to manage their employees’ access to
              the platform in a secure and efficient manner.
            </p>
          </li>
          <li>
            Multiple POS Locations
            <p>
              As Ferry companies have different POS locations, the RAFT platform
              allows them to indicate the location they’re selling from.
            </p>
          </li>
          <li>
            Ticket printing
            <p>Print paper Ferry tickets with a custom layout.</p>
          </li>
          <li>
            Reporting
            <p>
              Multiple reporting views to maximize the businesses productivity
              and revenue through the platform.
            </p>
          </li>
        </ul>
      </>
    ),
    imageURL: RaftOverview
  },
  techStackContent: [],
  techStackIcons: [
    {
      id: '1',
      name: 'Node.js',
      photo: Node
    },
    {
      id: '2',
      name: 'React',
      photo: React
    },
    {
      id: '3',
      name: 'GraphQL',
      photo: GraphQL
    },
    {
      id: '4',
      name: 'AWS',
      photo: AWS
    },
    {
      id: '5',
      name: 'PostgreSQL',
      photo: PostgreSQL
    }
  ]
}

export default raftDetails
