import RaftHeader from 'assets/portfolio/raft/header_background.png'
import RaftLogo from 'assets/portfolio/raft/raft_logo.png'
import RaftReservations from 'assets/portfolio/raft/raft_reservations.png'
import RaftOverview from 'assets/portfolio/raft/raft_overview.png'
import TestimonialsImage from 'assets/portfolio/raft/testimonials_default_image.png'
import RaftResumeBackground from 'assets/portfolio/raft/resume_background.png'

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
    logoURL: RaftLogo,
    logoBackground: '#FFFFFF',
    heading: 'Success Story',
    title: 'Raft',
    subtitle: 'A search engine for ferry booking.',
    tags: [
      'Travel',
      'Booking'
    ],
    description: 'RAFT Croatia is a search engine for ferry bookings. RAFT’s mission is to make transportation between the islands and coastal cities of Croatia seamless, and stress free.',
    websiteURL: 'https://raftcroatia.com/',
    imageURL: RaftReservations
  },
  challenge: {
    title: 'Challenge',
    content: (
      <>
        <p>
          Ferry transportation is a pretty niche industry, and there is no search engine or metadata platform for it, either globally or in specific countries, so we had to build much of it on our own.
        </p>
        <p>
          We needed to design and implement platforms and tools both for passengers to buy ferry tickets and for ferry companies to manage their routes and operate their business in an easy way.
        </p>
      </>
    )
  },
  testimonials: [{
    profileImageURL: TestimonialsImage,
    name: 'Kerry Hebert',
    quote: '“WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.”',
    position: 'CEO RAFT',
    company: 'HSBC'
  }],
  solution: {
    title: 'The solution',
    content: (
      <>
        <h2>RAFT Croatin Online</h2>
        <ul>
          <li>
            Online Ferry Tickets Booking<br />
            Ability to search trips (one-way, round-trip, or multi-stop trips) and book them online.
          </li>
          <li>
            Integration with Payment Gateways<br />
            Integration with Stripe and local payment gateways.
          </li>
          <li>
            My account section<br />
            Allow the customer to create an account and access their information, see their trips, reschedule or cancel trips.
          </li>
          <li>
            Active communication channels with customers<br />
            We integrated with SMS and Email providers to send notifications and other relevant information to the customers (booking confirmations, changes on schedule, etc).          </li>
        </ul>
        <h2>Biz Portal</h2>
        <ul>
          <li>
            POS - Point Of Sales<br />
            A tool for the Ferry companies to sell their tickets online, using RAFT’s POS.
          </li>
          <li>
            Employee management<br />
            Enables the Ferry companies to manage their employees’ access to the platform in a secure and efficient manner.
          </li>
          <li>
            Multiple POS Locations<br />
            As Ferry companies have different POS locations, the RAFT platform allows them to indicate the location they’re selling from.
          </li>
          <li>
            Ticket printing<br />
            Print paper Ferry tickets with a custom layout.
          </li>
          <li>
            Reporting<br />
            Multiple reporting views to maximize the businesses productivity and revenue through the platform.
          </li>
        </ul>
      </>
    ),
    imageURL: RaftOverview
  }
}

export default raftDetails
