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
    subtitle: 'A data-driven betting sports platform.',
    tags: ['Sports Betting', 'Data Analytics'],
    description:
      'Everyone is a fan of sports, and what better than to watch your favorite sports and also maybe make some money. That’s why Ballwiz’s owners decided to put their heads together and create a platform to allow everyone to do that. Easily and smartly.',
    websiteURL: '',
    imageURL: BallwizDashboard
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          Our challenge in this project was to build a betting platform with the
          focus put on the data analytics, trends and odds, to allow the user to
          make a decision on who to bet on based on real statistics and avoid
          living it on subjective ideas.
        </p>
        <p>
          We had to find a good balance between emotional bets and rational
          bets. So the UX was both challenging and fun!
        </p>
        <p>
          On the other hand, collecting real-time statistics was hard and
          required a lot of high-performant data processing.
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
          We used Machine Learning to process all the data we collected so that
          the user could make the decision on who to bet on based on real
          information and not just leave it to chance.
        </p>
        <p>
          We managed to consume information from different APIs, standardize the
          data and structure it so that we can process it and present it to the
          user in a meaningful way.
        </p>
        <p>
          We combined data of different sports based on different factors such
          as: weather conditions, team formation, history of the team, how they
          have been playing in the season, against whom, etc. Many factors that
          would give the user a really rational bet.
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
  ]
}

export default ballwizDetails
