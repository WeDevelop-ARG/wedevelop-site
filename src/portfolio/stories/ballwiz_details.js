import BallwizResumeBackground from 'assets/portfolio/ballwiz/resume_background.png'
import BallwizHeader from 'assets/portfolio/ballwiz/header_background.png'
import BallwizMobileHeader from 'assets/portfolio/ballwiz/mobile_header_background.png'
import BallwizLogo from 'assets/portfolio/ballwiz/ballwiz_logo.svg'
import BallwizDashboard from 'assets/portfolio/ballwiz/ballwiz_dashboard.png'
import BallwizSignUp from 'assets/portfolio/ballwiz/ballwiz_signup.png'
import Node from 'assets/portfolio/tech_stack/node.svg'
import React from 'assets/portfolio/tech_stack/react.svg'
import GraphQL from 'assets/portfolio/tech_stack/graphql.svg'
import AWS from 'assets/portfolio/tech_stack/aws.svg'
import PostgreSQL from 'assets/portfolio/tech_stack/postgresql.svg'
import Python from 'assets/portfolio/tech_stack/python.svg'

const ballwizDetails = {
  urlName: 'ballwiz',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for Ballwiz'
  },
  resume: {
    headerImageURL: BallwizResumeBackground
  },
  header: {
    backgroundURL: BallwizHeader,
    mobileBackgroundURL: BallwizMobileHeader,
    logoURL: BallwizLogo,
    logoBackground: '#000000',
    heading: 'Success Story',
    title: 'Ballwiz',
    subtitle: 'A data-driven sports betting platform.',
    tags: ['Sports Betting', 'Data Analytics'],
    description:
      'Most people are fans of sports, and many people want the chance to make some money while they watch their favorite game. That’s why Ballwiz’s owners put their heads together and created a platform to allow everyone to do just that, quickly and efficiently.',
    imageURL: BallwizDashboard
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          Our challenge in this project was to build a betting platform with a focus
          on data analytics, trends, and odds. This would allow the user to make their
          bets based on real statistics, removing ambiguity and subjectivity
          from the process.
        </p>
        <p>
          We had to find the right balance between emotional bets and rational bets,
          so developing the UX was both challenging and fun!
        </p>
        <p>
          On the other hand, collecting real-time statistics was difficult and required
          high-performance data processing.
        </p>
      </>
    )
  },
  testimonials: [
    {
      profileImageURL: '',
      name: '',
      quote:
        '"They’re willing to engage with a problem to figure it out rather than waiting to be told what to do."',
      position: 'Founder',
      company: 'Sports Betting Startup'
    }
  ],
  solution: {
    title: 'The Solution',
    content: (
      <>
        <p>
          We used machine learning to process all the data we collected. This ensured
          that the user could base their bets on accurate and readily-accessible information.
        </p>
        <p>
          We managed to gather information from different APIs before standardizing
          the data and structuring it. From there, we processed the data and presented
          it to the user in a meaningful way.
        </p>
        <p>
          We combined data from different sports based on factors like weather
          conditions, team formation, team track records, team performance in
          the current season, who they have played/are playing, etc. — factors that
          support rational betting.
        </p>
      </>
    ),
    imageURL: BallwizSignUp
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
      name: 'Python',
      photo: Python
    }
  ],
  reviewedOnClutch: true
}

export default ballwizDetails
