import DrCannabisMobileHeader from 'assets/portfolio/dr_cannabis/mobile_header_background.png'
import DrCannabisHeader from 'assets/portfolio/dr_cannabis/header_background.png'
import DrCannabisLogo from 'assets/portfolio/dr_cannabis/dr_cannabis_logo.png'
import Diagnostic from 'assets/portfolio/dr_cannabis/diagnostic.png'
import DrCannabisOverview from 'assets/portfolio/dr_cannabis/dr_cannabis_overview.png'
import ResumeBackground from 'assets/portfolio/dr_cannabis/resume_background.png'
import ReactNative from 'assets/portfolio/tech_stack/react.svg'
import Firebase from 'assets/portfolio/tech_stack/firebase.svg'

const drCannabisDetails = {
  urlName: 'dr-cannabis',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for DRCANNABIS'
  },
  resume: {
    headerImageURL: ResumeBackground
  },
  header: {
    backgroundURL: DrCannabisHeader,
    mobileBackgroundURL: DrCannabisMobileHeader,
    logoURL: DrCannabisLogo,
    logoBackground: '#DBF1E2',
    heading: 'Success Story',
    title: 'Dr Cannabis',
    subtitle: 'An AI-powered App to diagnose issues with cannabis plants',
    tags: ['IA', 'Health'],
    description:
      'People across the world like to grow their own cannabis, but that’s not always a simple task. The plant can wither or even die if the grower is not well-versed in horticulture. Luckily, there is a lot of information online about the cultivation process, and the community is very friendly. You ask, you get a response. You are not on your own. Dr. Cannabis wanted to take this community knowledge to the next level. That’s why they decided to gather as much information as possible and use machine learning to train an AI-powered application that supports people who want to cultivate and harvest their own cannabis.',
    imageURL: Diagnostic
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          One of our biggest challenges was to simplify everything as much as possible.
          Our customer research sessions that we had several
          well-defined customer segments, most of which were not tech-savvy. This meant
          we needed the app to be super user-friendly.
        </p>
        <p>
          The other challenge we faced was gathering all the information online, simply because
          this information was user-generated and therefore not always accurate. Thus we had to review
          and curate the information before feeding it into our AI.
        </p>
      </>
    )
  },
  solution: {
    title: 'The Solution',
    content: (
      <>
        <p>
          We approached this challenge using the Lean methodology. We listed the main problems
          for users, ran interviews and other customer research activities, and wrote hypotheses
          for the potential solutions.
        </p>
        <p>
          The main problem we tackled was user confidence — many people simply didn’t feel confident
          nor comfortable with growing Cannabis.
        </p>
        <p>
          To remedy this, we created a minimum viable product app that made people feel
          supported by a positive community and connected with other users just like them.
        </p>
        <p>
          The app is elegantly simple. The software asks people to post three pictures of their plant
          (with or without disease) and a brief description of the issue in their own words. Then,
          community experts reach out to the individual with valuable feedback.
        </p>
      </>
    ),
    imageURL: DrCannabisOverview
  },
  techStackContent: [],
  techStackIcons: [
    {
      id: '1',
      name: 'React Native Severless',
      photo: ReactNative
    },
    {
      id: '2',
      name: 'Firebase',
      photo: Firebase
    }
  ],
  reviewedOnClutch: false
}

export default drCannabisDetails
