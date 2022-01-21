import Image from 'main_app/components/Image'

import CopaResumeBackground from 'assets/portfolio/copa/resume_background.png'
import CopaHeader from 'assets/portfolio/copa/header_background.png'
import CopaLogo from 'assets/portfolio/copa/copa_logo.svg'
import CopaSignUp from 'assets/portfolio/copa/copa_signup.png'
import TestimonialsImage from 'assets/portfolio/copa/copa_manager.png'
import CopaFrontdesk from 'assets/portfolio/copa/copa_frontdesk.png'
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
    logoURL: CopaLogo,
    logoBackground: '#000000',
    heading: 'Success Story',
    title: 'COPA',
    subtitle: 'A tailored management system for the business.',
    tags: [
      'Fitness',
      'Custom'
    ],
    description: 'COPA Soccer Training Center utilizes advanced technology and sports science to offer a unique objective data-driven approach to training. Each area of their 110,000 square foot facility is designed... to enhance an athlete’s cognitive, physical, and technical development. They are dedicated to innovating tradition training and help take the game to the next level.',
    websiteURL: '',
    imageURL: CopaSignUp
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <h3>Pre Opening</h3>
        <ul>
          <li>
            COPA STC needed to create a custom Backoffice solution to operate their business and Members Portal.
          </li>
          <li>
            As their business grew fast, they needed to create a solution fast to support
            the grand opening of their innovative 110,000 square foot facility.
          </li>
          <li>
            They only had 3 months to get these things done!
          </li>
        </ul>
        <h3>Post Opening</h3>
        <ul>
          <li>
            After successfully opening their facility, user’s feedback began to flow rapidly.
            So, all the tools developed up to the opening point continued this quick development
            iterations in order to meet COPA’s customers’ expectations.
          </li>
        </ul>
      </>
    )
  },
  testimonials: [{
    profileImageURL: TestimonialsImage,
    name: 'Kerry Hebert',
    quote: '“They helped us to create member portals with different gamification opportunities that also helped us monetize on a different level. We\'re extremely excited about WeDevelop.”',
    position: 'General Manager',
    company: 'Soccer Training Center'
  }],
  solution: {
    title: 'The Solution',
    content: (
      <>
        <p>
          We worked alongside COPA's stakeholders, GM, the Accounting department, and all other
          areas to design and implement the software they need in the 3-month window time.
        </p>
        <p>
          WeDevelop put their creative team to brainstorm ways to develop these solutions
          in a fast iterative way, so that a functional version could be delivered on time.
        </p>
        <h3>About Software Development Methodology</h3>
        <p>
          Meeting customers’ expectations in real life is not an easy task. In the best case
          scenario, one would have time to design and iterate basic User Experience aspects
          for the digital solutions, then develop small pieces of software, deploy them, test
          them, and so on.
        </p>
        <p>
          After a few months of development, a Minimal Viable Product would be released and
          users would start to use it, giving feedback, and the team that created the product
          would use that feedback to improve it.
        </p>
        <p>
          In the case of COPA STC, they found out the need for this custom solution 3 months
          before opening the doors of their amazing facility.
        </p>
        <p>
          WeDevelop jumped right in -when no other software company dared to do so- and helped
          COPA to materialize their dream: seeing athletes training in their top-notch facility.
        </p>
        <p>
          The methodology we followed was a nice mix of Agile with a Lean mindset.
        </p>
        <Image src={CopaMethodology} alt='' objectFit='contain' position='center' />
        <p>
          Basically, we deployed every 2-week Sprint a very small but functional piece of software.
          We provided a small but highly talented cross-functional team that pushed on a sophisticated
          development cycle that allowed us to deliver consistently every couple of weeks.
        </p>
        <p>
          The first versions, as you can imagine, were just the basic stuff COPA needed to operate
          their business. Release by release, their software grew and became a full facility management
          system with a lot of auxiliary tools, such as a Touchless Check-In System, Data Pipeline, and more.
        </p>
        <h3>Software delivered</h3>
        <ul>
          <li>
            Backoffice
            <p>
              A set of tools to enable COPA to operate its business through a branded platform, optimized
              for the business needs, and able to iterate as the business model does.
            </p>
            <ul>
              <li>
                Classes Scheduling
                <p>
                  Ability to schedule classes of different practices during the week. Manage a complex
                  schedule with multiple instructors, spaces, and time rotation.
                </p>
              </li>
              <li>
                Billing
                <p>
                  Billing management, reporting, payments for memberships, one-time class passes, reporting.
                </p>
              </li>
              <li>
                Integrations with GL Software
                <p>
                  Integration with 3rd party GL software for reporting and budgeting.
                </p>
              </li>
              <li>
                Memberships Management
                <p>
                  Subscription plans, features per memberships, benefits, perks.
                </p>
                <p>
                  Allow COPA to define its memberships according to the business needs and their customers’ preferences.
                </p>
              </li>
            </ul>
          </li>
          <li>
            Facility Tools
            <p>Auxiliary solutions to support the big and sophisticated facility operations.</p>
            <ul>
              <li>
                Touchless Check-In System
                <p>
                  “WeDevelop proposed a purely custom solution. They provided a touchless verification
                  check in, which is better. It really streamlines our process and aligns with our
                  facility and our goals of being the most technologically advanced training facility
                  in the world open to the public.”
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
                  We created a solid structure for the data to travel from the different training devices
                  to a central database. This allowed COPA to extract actionable metrics and stats for its athletes.
                </p>
              </li>
            </ul>
          </li>
          <li>
            Customers Portal
            <p>
              A branded portal for a complete customers’ self-service.
            </p>
            <ul>
              <li>
                Booking Classes
                <p>
                  Allow customers to book their classes, reschedule, or cancel them.
                </p>
              </li>
              <li>
                Access to Memberships and one-time packages
                <p>
                  Allow customers to navigate through COPA’s memberships and other packages, and sign up to them.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <h3>Usability Tests on site</h3>
        <p>
          As COPA’s business grew, customers’ feedback became a high priority for everyone involved
          in the venture. WeDevelop conducted on-site usability testing to ensure the UI and UX of
          all the interfaces we designed were easy-to-use tools that make people’s life easier.
        </p>
        <p>
          The results of these sessions provided not only insights for improving our digital tools
          but also provided highly valuable insights to COPA’s business, facility, crew, and more.
        </p>
      </>
    ),
    imageURL: CopaFrontdesk
  }
}

export default copaDetails
