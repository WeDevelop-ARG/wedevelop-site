import DrCannabisHeader from 'assets/portfolio/dr_cannabis/header_background.png'
import DrCannabisLogo from 'assets/portfolio/dr_cannabis/dr_cannabis_logo.png'
import Diagnostic from 'assets/portfolio/dr_cannabis/diagnostic.png'
import DrCannabisOverview from 'assets/portfolio/dr_cannabis/dr_cannabis_overview.png'
import ResumeBackground from 'assets/portfolio/dr_cannabis/resume_background.png'

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
    logoURL: DrCannabisLogo,
    logoBackground: '#DBF1E2',
    heading: 'Success Story',
    title: 'Dr Cannabis',
    subtitle: 'An AI-powered App to diagnose Cannabis plants',
    tags: ['IA', 'Health'],
    description:
      'People like to grow their own Cannabis, but that’s not a simple task though. The plant can get sick or even die if you’re not well-versed in cultivating Cannabis. However, there is lots of information online about this, and the community is very friendly. You ask, you get a response. You are not alone in this task. We wanted to take this to the next level: gather as much information as possible and train, using Machine Learning, an AI-powered application to coach people that want to cultivate (and harvest) their own Cannabis.',
    websiteURL: '',
    imageURL: Diagnostic
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          One of our biggest challenges was to make everything simple. We wanted
          the App to be super user friendly. We knew, as we learned from
          customer research sessions, that we had a few well defined customer
          segments, and most of them were not tech savvy.
        </p>
        <p>
          The other challenge we faced was gathering all the information online.
          No because of acquiring but because this information was created by
          people that not always were experts. Thus we had to review and curate
          the information before using it to feed our AI.
        </p>
      </>
    )
  },
  testimonials: [],
  solution: {
    title: 'The Solution',
    content: (
      <>
        <p>
          We approached this challenge using the Lean methodology. We listed the
          main problems people had, ran a lot of interviews and other Customer
          Research activities, and wrote a few hypotheses of solutions.
        </p>
        <p>
          The first problem we tackled was: people didn’t feel confident nor
          comfortable with growing Cannabis.
        </p>
        <p>
          For this problem, we created an MVP app that would make people feel
          they are not alone but instead have the support of a nice community.
        </p>
        <p>
          The App was very simple. We’d ask people to post 3 pictures of their
          plant (with or without disease) and a brief description in their own
          words of the peculiarities of the plant. Then experts (from the
          community) will get back to the person with valuable feedback.
        </p>
      </>
    ),
    imageURL: DrCannabisOverview
  },
  techStackContent: []
}

export default drCannabisDetails
