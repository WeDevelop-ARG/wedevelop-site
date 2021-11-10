import RaftHeader from 'assets/portfolio/raft/header_background.png'
import RaftReservations from 'assets/portfolio/raft/raft_reservations.png'
import RaftOverview from 'assets/portfolio/raft/raft_overview.png'

const raftDetails = {
  urlName: 'raft',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for RAFT'
  },
  header: {
    backgroundURL: RaftHeader,
    logoURL: ''
  },
  intro: {
    heading: 'Success Story',
    title: 'Raft',
    subtitle: 'A search engine for ferry booking.',
    tags: [
      'E-commerce',
      'Web Responsive',
      'Staff Augmentation'
    ],
    description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
    websiteURL: 'https://raftcroatia.com/',
    imageURL: RaftReservations
  },
  challenge: {
    title: 'Challenge',
    content: (
      <>
        <p>
          Ferry transportation is a pretty niche industry, and there is no search engine
          or metada platform for it, either globally or in specific countries, so we had
          to build much of it on our own.
        </p>
        <p>
          Malesuada habitant massa euismod porttitor aliquet diam ac eleifend. Elementum
          ut morbi non ornare. Facilisis ut enim lorem vel id et posuere. Posuere in consectetur
          fermentum purus hendrerit faucibus donec auctor. Pellentesque vitae facilisis
          non sem quis tellus amet. Massa mauris non volutpat praesent et pellentesque
          velit. Senectus id lectus commodo molestie elementum. Proin tristique at justo
          vivamus blandit feugiat purus condimentum. Malesuada massa id fermentum pretium sit nec.
        </p>
      </>
    )
  },
  testimonial: {
    profileImageURL: '',
    name: 'Kerry Hebert',
    quote: '“WeDevelop was resourceful, unafraid of problems and bockers, creative, professional, and fast.”',
    position: 'QA Manager',
    company: 'HSBC'
  },
  results: {
    title: 'Results & Feedback',
    content: (
      <>
        <p>
          We just said that hiring a Web Developer was a simple solution, but that’s not
          entirely true. Web Development is a complex process involving a great deal of
          skill, a high degree of professionalism, a touch of artistic creativity, and
          some exposure to the craft. Although there are countless Web Development companies,
          freelancers, and contractors, finding a developer that fits the bill can still be a challenge.
        </p>
        <p>
          Hiring a poor developer will consequently result in an inferior product. You
          might actually end up losing money by running a weak web platform on top of
          whatever it cost to develop. For instance, given that most online traffic comes
          from mobile devices, user experience is a key performance factor for websites
          and web apps. If the developer ignores crucial web performance attributes such
          as responsive design, loading speed, visual appeal, and SEO capabilities, the
          resulting site will miss out on countless business opportunities and lose badly
          to competitors. Business-wise, such a site would be worse than just a waste of
          money, time, and effort.
        </p>
      </>
    ),
    imageURL: RaftOverview
  }
}

export default raftDetails
