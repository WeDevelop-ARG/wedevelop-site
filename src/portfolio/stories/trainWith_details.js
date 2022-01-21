import TrainWithResumeBackground from 'assets/portfolio/train_with/resume_background.png'
import TrainWithHeader from 'assets/portfolio/train_with/header_background.png'
import TrainWithLogo from 'assets/portfolio/train_with/train_with_logo.png'
import TrainWithLiveClass from 'assets/portfolio/train_with/train_with_live_class.png'
import TestimonialsImage from 'assets/portfolio/train_with/train_with_ceo.png'
import TrainWithSelectClass from 'assets/portfolio/train_with/train_with_select_class.png'
import Node from 'assets/portfolio/tech_stack/node.svg'
import React from 'assets/portfolio/tech_stack/react.svg'
import Agora from 'assets/portfolio/tech_stack/agora.svg'
import Stripe from 'assets/portfolio/tech_stack/stripe.svg'

const trainWithDetails = {
  urlName: 'train-with',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for TrainWith'
  },
  resume: {
    headerImageURL: TrainWithResumeBackground
  },
  header: {
    backgroundURL: TrainWithHeader,
    logoURL: TrainWithLogo,
    logoBackground: 'linear-gradient(93.58deg, #9194A1 2.39%, #959AA6 96.87%)',
    heading: 'Success Story',
    title: 'TrainWith',
    subtitle: 'A Web-based streaming platform for fitness',
    tags: ['Fitness', 'Streaming'],
    description:
      'TrainWith is a fitness application, founded in 2017, that allows trainers to host classes online, both live and on-demand. Users can join these classes from the comfort of their homes. During the COVID-19 pandemic the lockdown forced gyms to close their doors and the whole fitness industry faced a crisis without precedents.',
    websiteURL: '',
    imageURL: TrainWithLiveClass
  },
  challenge: {
    title: 'Challenge',
    content: (
      <>
        <p>
          As the origin of the word “crisis”, TrainWith’s CEO Rachel Aram, saw
          an opportunity to adapt the platform to the current situation,
          enabling not only individual fitness trainers to share their content
          but also gyms and fitness franchises to do so.
        </p>
        <p>
          To add to the challenge of this core change itself, the platform was
          actively working with thousands of users, and signing up new users
          every day.
        </p>
        <p>
          Furthermore, the backend of the platform had a lot of legacy code (a
          common situation of startup products that iterated a lot), and the
          frontend of the platform was a native iOS app that was also not very
          scalable.
        </p>
      </>
    )
  },
  testimonials: [
    {
      profileImageURL: TestimonialsImage,
      name: '',
      quote:
        'They’re a well-rounded team, which is conducive to troubleshooting [and] having difficult conversations.',
      position: 'CEO',
      company: 'Fitness App Company'
    }
  ],
  solution: {
    title: 'The solution',
    content: (
      <>
        <p>
          As always, we focus on achieving the business goals first. For goals
          to be achieved, it not only requires to do the thing that’s needed but
          also to do it on time.
        </p>
        <p>
          This project was a great challenge because nobody was prepared for
          this pandemic. Overnight, TrainWith’s business model had to be
          drastically adapted and so its software products.
        </p>
        <h3>Adaptation of current platform</h3>
        <p>
          First, we focused on the main goal: turn TrainWith into a white-label
          product so that gyms and other fitness studios could release their
          branded apps to their clients.
        </p>
        <p>
          We tried to reuse as much of the legacy code as possible, writing as
          many tests as the code allowed to avoid bugs.
        </p>
        <p>
          Some new features were coded from scratch, following the Clean Code
          principles. This allowed us to migrate small parts of the system
          without causing any disruption to the UX.
        </p>
        <h3>Migrating to a Web-based responsive streaming platform</h3>
        <p>
          Once the platform was white-labeled and working properly, we switched
          our focus to the next bottleneck: the iOS App. The process for
          releasing new versions to the App Store was cumbersome and not as
          agile as we need. Also, the app’s code wasn’t that good either, so
          every change demanded a lot of time and the results didn’t meet our
          expectations.
        </p>
        <p>
          After we identified this and evaluated this situation thoroughly, we
          ran surveys and other customer research tools to find out what devices
          people were using. Not surprisingly, Android users weren’t happy about
          not having an option for Android. But we also found out that iOS users
          weren’t happy either with the app and its clunky UX.
        </p>
        <p>
          Finally, we developed a new web-based version of the platform,
          optimized for different device sizes (mobile phones, ipads, tablets,
          laptops, desktop computers, etc).
        </p>
      </>
    ),
    imageURL: TrainWithSelectClass
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
      name: 'Agora',
      photo: Agora
    },
    {
      id: '4',
      name: 'Stripe',
      photo: Stripe
    }
  ]
}

export default trainWithDetails
