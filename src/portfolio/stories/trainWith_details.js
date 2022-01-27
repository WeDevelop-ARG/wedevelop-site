import TrainWithResumeBackground from 'assets/portfolio/train_with/resume_background.png'
import TrainWithMobileHeader from 'assets/portfolio/train_with/mobile_header_background.png'
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
    mobileBackgroundURL: TrainWithMobileHeader,
    logoURL: TrainWithLogo,
    logoBackground: 'linear-gradient(93.58deg, #9194A1 2.39%, #959AA6 96.87%)',
    heading: 'Success Story',
    title: 'TrainWith',
    subtitle: 'A Web-based streaming platform for fitness',
    tags: ['Fitness', 'Streaming'],
    description:
      'TrainWith is a fitness application founded in 2017 that allows trainers to host live and on-demand classes online. Users can join these classes from the comfort of their homes. During the COVID-19 pandemic, the lockdown forced gyms to close their doors, and the whole fitness industry faced a crisis without precedents.',
    websiteURL: 'https://train-with.com/',
    imageURL: TrainWithLiveClass
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          In the face of this crisis, TrainWith’s CEO, Rachel Aram, saw an opportunity
          to adapt the platform to the current situation, enabling individual fitness
          trainers, gyms, and fitness franchises to share their content.
        </p>
        <p>
          Adding to the challenge of this core change itself, the platform was already
          working with thousands of users and bringing in new users every day.
        </p>
        <p>
          Furthermore, the backend of the platform featured large amounts of legacy
          code — a common situation for iterated startup products. Meanwhile, at the
          front end of the platform was a native iOS app that was not easily scalable.
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
      company: 'TrainWith'
    }
  ],
  solution: {
    title: 'The solution',
    content: (
      <>
        <p>
          As always, we focused on achieving the business goals first. This meant
          executing the right strategy to a strict deadline.
        </p>
        <p>
          This project was a great challenge because nobody was prepared for this
          pandemic. Overnight, TrainWith’s business model and software products had
          to be drastically adapted.
        </p>
        <h4>Adaptation of current platform</h4>
        <p>
          First, we focused on the main goal — to turn TrainWith into a white-label
          product so that gyms and other fitness studios could release their branded
          apps to their clients.
        </p>
        <p>
          We tried to reuse as much of the legacy code as possible, writing as many
          tests as the code allowed to avoid bugs.
        </p>
        <p>
          We coded some new features from scratch, following the Clean Code principles.
          This allowed us to migrate small parts of the system without causing any
          disruption to the UX.
        </p>
        <h4>Migrating to a Web-based responsive streaming platform</h4>
        <p>
          Once the platform was white-labeled and working properly, we switched our
          focus to the next bottleneck — the iOS App. The process for releasing new
          versions to the App Store was cumbersome and not as agile as we needed it
          to be. Also, the app’s code was substandard, so changes were time-consuming
          and often did not meet our expectations.
        </p>
        <p>
          After we identified this problem and evaluated the situation thoroughly, we
          ran surveys and other customer research programs to determine what devices
          people were using. Unsurprisingly, Android users weren’t happy about not having
          an option for their OS. But we also found out that iOS users weren’t pleased
          either due to the app’s performance and its clunky UX.
        </p>
        <p>
          Finally, we developed a new web-based version of the platform, optimized for
          different devices such as mobile phones, iPads, tablets, laptops, desktop
          computers, and more.
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
