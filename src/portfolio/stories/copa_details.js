import Image from 'main_app/components/Image'

import CopaResumeBackground from 'assets/portfolio/copa/resume_background.png'
import CopaMobileHeader from 'assets/portfolio/copa/mobile_header_background.png'
import CopaHeader from 'assets/portfolio/copa/header_background.png'
import CopaLogo from 'assets/portfolio/copa/copa_logo.svg'
import CopaSignUp from 'assets/portfolio/copa/copa_signup.png'
import TestimonialsImage from 'assets/portfolio/copa/copa_manager.png'
import CopaFrontdesk from 'assets/portfolio/copa/copa_frontdesk.png'
import Node from 'assets/portfolio/tech_stack/node.svg'
import React from 'assets/portfolio/tech_stack/react.svg'
import GraphQL from 'assets/portfolio/tech_stack/graphql.svg'
import AWS from 'assets/portfolio/tech_stack/aws.svg'
import PostgreSQL from 'assets/portfolio/tech_stack/postgresql.svg'
import CopaMethodology from 'assets/portfolio/copa/copa_methodology.png'

const copaDetails = {
  urlName: 'copa',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for COPA'
  },
  resume: {
    headerImageURL: CopaResumeBackground
  },
  header: {
    backgroundURL: CopaHeader,
    mobileBackgroundURL: CopaMobileHeader,
    logoURL: CopaLogo,
    logoBackground: '#000000',
    heading: 'Success Story',
    title: 'COPA',
    subtitle: 'A tailored management system for the business.',
    tags: ['Fitness', 'Custom'],
    description:
      'COPA Soccer Training Center utilizes advanced technology and sports science to offer a unique objective, data-driven approach to training. Each area of their 110,000 square foot facility is designed to enhance the cognitive, physical, and technical development of athletes. They are dedicated to improving traditional training with innovation — helping take the game to the next level.',
    websiteURL: 'https://copastc.com/',
    imageURL: CopaSignUp
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <h4>Pre Opening</h4>
        <ul>
          <li>
            <p>
              COPA STC needed a custom back-office solution for their business
              and Members Portal.
            </p>
          </li>
          <li>
            <p>
              As the business grew rapidly, they needed a solution to support
              the grand opening of their innovative 110,000-square-foot facility.
            </p>
          </li>
          <li><p>They only had 3 months to get these things done!</p></li>
        </ul>
        <h4>Post Opening</h4>
        <p>
          After successfully opening their facility, user feedback quickly began
          to flow in. This data needed to be applied to the tools developed ahead
          of the opening, achieving swift and ongoing evolution to meet COPA’s
          customer expectations.
        </p>
      </>
    )
  },
  testimonials: [
    {
      profileImageURL: TestimonialsImage,
      name: '',
      quote:
        '“They helped us to create member portals with different gamification opportunities that also helped us monetize on a different level. We\'re extremely excited about WeDevelop.”',
      position: 'General Manager',
      company: 'COPA Soccer Training Center'
    }
  ],
  solution: {
    title: 'The Solution',
    content: (
      <>
        <p>
          We worked alongside COPA’s stakeholders, general managers, accounting
          department, and all other areas to design and implement the software
          they needed in the 3-month window.
        </p>
        <p>
          WeDevelop deployed their creative team, brainstorming ways to develop
          these solutions in a fast, iterative manner to deliver a functional
          version on time.
        </p>
        <h4>About Software Development Methodology</h4>
        <p>
          Meeting customers’ expectations in real life is not an easy task.
          First, software teams need time to design and iterate basic user
          experience aspects for digital solutions. Next is the development
          of small pieces of software, deployment, testing, and so on.
        </p>
        <p>
          After a few months of development, a Minimal Viable Product is
          released, ready for user feedback. This feedback becomes part of
          the ongoing development and improvement strategy.
        </p>
        <p>
          In the case of COPA STC, there was no time. Instead, they identified
          a need for this custom solution only 3 months before opening the
          doors of their extraordinary facility.
        </p>
        <p>
          WeDevelop jumped right in when no other software company dared to
          do so. As a result, we helped COPA realize their dream — seeing
          athletes train in their top-notch facility.
        </p>
        <p>
          The methodology we followed was a nice mix of Agile combined with
          a Lean mindset.
        </p>
        <Image src={CopaMethodology} alt='' objectFit='contain' position='center' />
        <p>
          Basically, every 2-week sprint, we deployed a very small but functional
          piece of software. In addition, we provided a small but highly talented
          cross-functional team on a sophisticated development cycle, allowing us
          to deliver consistently every couple of weeks.
        </p>
        <p>
          As you can imagine, the first versions provided just the basic functionality
          COPA needed to operate their business. Release by release, the software
          grew and became a full facility management system, complete with auxiliary
          tools such as a touchless check-in system, data pipeline, and more.
        </p>
        <h4>Software delivered</h4>
        <ul>
          <li>
            Back-office
            <p>
              A set of tools to enable COPA to operate its business through a
              branded platform, optimized for their business needs. A solution
              that can iterate as the business model does.
            </p>
            <ul>
              <li>
                Classes Scheduling
                <p>
                  Scheduling software for different practices and classes during
                  the week, managing a complex schedule with multiple instructors,
                  spaces, and time rotation.
                </p>
              </li>
              <li>
                Billing
                <p>
                  Billing management software, handling reporting, payments for
                  memberships, one-time class passes, and other aspects.
                </p>
              </li>
              <li>
                Integrations with GL Software
                <p>
                  Integration with 3rd party GL software for reporting and
                  budgeting.
                </p>
              </li>
              <li>
                Memberships Management
                <p>
                  Tools supporting subscription plans, features per memberships,
                  benefits, and perks allow COPA to define its memberships according
                  to business needs and customers’ preferences.
                </p>
              </li>
            </ul>
          </li>
          <li>
            Facility Tools
            <p>
              Auxiliary solutions to support sophisticated facility operations.
            </p>
            <ul>
              <li>
                Touchless Check-In System
                <p>
                  WeDevelop proposed a purely custom solution, providing a touchless
                  verification check-in to streamline COPA’s process. This system
                  aligns with the organization’s identity and COPA’s goal of being
                  the most technologically advanced public training facility in the
                  world open.
                </p>
              </li>
              <li>
                Wayfinding Maps
                <p>
                  Interactive wayfinding maps for the 110,000 square foot facility.
                </p>
              </li>
              <li>
                Data Pipeline
                <p>
                  We created a solid structure, delivering data from different training
                  devices to a central database. This allowed COPA to extract actionable
                  metrics and stats for its athletes.
                </p>
              </li>
            </ul>
          </li>
          <li>
            Customers Portal
            <p>A branded portal for a complete customer self-service experience.</p>
            <ul>
              <li>
                Booking Classes
                <p>
                  Tools for customers to book, reschedule, or cancel classes.
                </p>
              </li>
              <li>
                Access to Memberships and one-time packages
                <p>
                  Navigation tools for COPA’s memberships and other packages, as well as
                  sign-ups.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <h4>Usability Tests on-site</h4>
        <p>
          As COPA’s business grew, customer feedback became a high priority for everyone
          involved in the venture. WeDevelop conducted on-site usability testing to ensure
          the UI and UX of all interfaces were intuitive and easy-to-use, making the
          customer’s life easier.
        </p>
        <p>
          This testing provided insights for improving our digital tools and gave highly
          valuable data to COPA’s business, facility, crew, and more.
        </p>
      </>
    ),
    imageURL: CopaFrontdesk
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
    },
    {
      id: '6',
      name: 'React Native',
      photo: React
    }
  ]
}

export default copaDetails
