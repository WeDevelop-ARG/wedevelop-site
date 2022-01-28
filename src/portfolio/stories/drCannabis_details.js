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
    subtitle: 'An AI-powered App to diagnose issues with Cannabis plants',
    tags: ['IA', 'Health'],
    description:
      'People like to grow their own Cannabis, but that’s not always a simple task. The plant can get sick or even die if the grower is not well-versed in cultivating Cannabis. However, there is lots of information online about the cultivation process, and the community is very friendly. You ask, you get a response. You are not alone in this task. Dr. Cannabis wanted to take this to the next level. They decided to gather as much information as possible and then use machine learning to train an AI-powered application that supports people who want to cultivate and harvest their own Cannabis.',
    imageURL: Diagnostic
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          One of our biggest challenges was to make everything simple. We wanted the app to be
          super user-friendly. We learned from customer research sessions that we had several
          well-defined customer segments, most of which were not tech-savvy.
        </p>
        <p>
          The other challenge we faced was gathering all the information online, simply because
          this information was user-generated and so not always accurate. Thus we had to review
          and curate the information before using it to feed our AI.
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
          for the solution.
        </p>
        <p>
          The first problem we tackled was user confidence — people simply didn’t feel confident
          nor comfortable with growing Cannabis.
        </p>
        <p>
          For this problem, we created a minimum viable product app that would make people feel
          they are not alone, connecting users with the support of a positive community.
        </p>
        <p>
          The app was very simple. The software asks people to post three pictures of their plant
          (with or without disease) and a brief description in their own words of the issue. Then,
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
  ]
}

export default drCannabisDetails
