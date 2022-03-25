import InternalLink from 'main_app/components/InternalLink'
import Button from 'main_app/components/Button'

import DefaultBackground from 'assets/web_developers/backgrounds/bg_web_developers.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import BookLaptop from 'assets/web_developers/backgrounds/book_laptop.png'

import TimeZoneIcon from 'assets/staff_augmentation/timezone_globe.component.svg'
import CulturalClosenessIcon from 'assets/staff_augmentation/cultural_closeness.component.svg'
import LevelOfEnglishIcon from 'assets/staff_augmentation/language.component.svg'
import PriceQualityIcon from 'assets/staff_augmentation/price_quality.component.svg'

import StrongTalent from 'assets/reasons_to_choose_wedev/strong_talent.svg'
import WhiteGloveService from 'assets/reasons_to_choose_wedev/white_glove_service.svg'
import HighValues from 'assets/reasons_to_choose_wedev/high_values.svg'

import FaqsIcon from 'assets/staff_augmentation/faqs/faq_icon.svg'

const defaultContent = {
  pathName: '',
  metadata: {
    title: 'Web Development Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    landingName: <>web developers</>,
    title: (
      <>
        Top notch <b>Web Developers</b>
      </>
    ),
    description: (
      <>
        <p>Hire Web Developers without the hassles.</p>
      </>
    ),
    sideImageURL: DefaultBackground,
    backgroundColor: '#361989',
    navBar: {
      ctaDescription: 'Sign Up to Get Rates & Available Staff Details',
      buttonLabel: 'Get in touch'
    }
  },
  freeQuoteForm: {
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Get Web Developer profiles',
      description:
        'Fill out the form and receive a list of vetted Web Developers.'
    },
    formCustomizations: {
      fixedFields: {
        name: {
          label: 'Name',
          placeholder: 'Your name'
        },
        email: {
          label: 'Company Email',
          placeholder: 'Your company email'
        },
        message: {
          label: 'Requirements',
          placeholder: 'A Full-Stack Node and React Developer'
        }
      }
    },
    formOrigin: 'web-developers',
    formButtonText: 'Get Web Developer profiles',
    formDisclaimer: 'We typically reply every email within an hour.'
  },
  latamTalent: {
    subtitle: 'Latam Talent',
    title: <>The Best<br /><b>LATAM</b> Talent</>,
    text: 'We source the best talent from LATAM, which guarantees a great quality/price relation.\n\nNearshore to LATAM, it\'s a one-way trip.',
    ctaText: 'Get a Free Quote'
  },
  whyLatam: {
    subtitle: 'NEARSHORE',
    title: 'Why LATAM?',
    cards: [{
      icon: <TimeZoneIcon />,
      title: 'Time Zone Aligned',
      text: 'As our engineers are in LATAM in which only has 3 or 4 (+-) hours difference you are going to be working in real-time with your team. Being able to consult them and solve any issue straightaway.'
    }, {
      icon: <CulturalClosenessIcon />,
      title: 'Cultural Closeness',
      text: 'As we already know our cultures have a lot in common. We share the values of working as a team in a collaborative way, taking responsibilities, fulfilling schedules, and accomplishing a common goal.'
    }, {
      icon: <LevelOfEnglishIcon />,
      title: 'Level of English',
      text: 'In LATAM the level of english we present is above the average, and besides that we take care of ensuring you that every developer has a high level of English so you can be able to speak with them as you were speaking with an english native.'
    }, {
      icon: <PriceQualityIcon />,
      title: 'Best Price & Quality',
      text: 'You will find the best relation between price and quality. We only hire the top 1% talented developers to ensure you the best quality, and besides that our prices are almost half cheapest the cost of a US-based equivalent.'
    }],
    ctaText: 'Get a Free Quote'
  },
  skillSet: {
    title: 'With our skillset,\nWe’ve got you covered',
    subtitle: 'our team',
    ctaText: 'Get a Free Quote',
    positions: {
      'Backend Developers': [
        'Ruby Developers',
        'Python Developers',
        'PHP Developers',
        'Node.js Developers',
        'Java Developers',
        'Magento Developers',
        'Golang Developers'
      ],
      'Mobile Developers': [
        'iOS Developers',
        'Android Developers',
        'React Native Developers'
      ],
      'Cloud/AWS Engineers': [
        'AWS Engineers',
        'SRE Engineers',
        'Google Cloud Platform Engineers',
        'QA Engineers',
        'Manual QA Engineers',
        'QA Automation Engineers',
        'Project Managers',
        'Agile Project Managers',
        'SCRUM Masters',
        'Engineer Managers',
        'Seasoned Engineer Managers'
      ],
      'Frontend Developers': [
        'React Developers',
        'Angular Developers',
        'Vue.js Developers'
      ],
      'Microsoft Stack Developers': [
        '.Net Developers'
      ]
    }
  },
  portfolioFeaturedDisplay: {
    title: 'Our Portfolio',
    subtitle: "See what's possible",
    description: 'More than 20 companies have trust on us!',
    buttonText: 'View More'
  },
  reviewsHeading: {
    subtitle: 'Customers reviews',
    title: "Here's what our customers say about our Staffing services",
    description: '',
    buttonText: 'Get a Free Quote'
  },
  reviews: [
    {
      id: '1',
      quote:
        'They’re a well-rounded team, which is conducive to troubleshooting [and] having difficult conversations.',
      stars: 5,
      project: {
        type: 'App Development',
        company: 'Online Fitness Company'
      }
    },
    {
      id: '2',
      quote:
        'They’re willing to engage with a problem to figure it out rather than waiting to be told what to do.',
      stars: 5,
      project: {
        type: 'Software Development',
        company: 'Sports Betting Startup'
      }
    },
    {
      id: '3',
      quote:
        'The project cost about half of what it would have had we hired local engineers.',
      stars: 5,
      project: {
        type: 'Web App Development',
        company: 'Loan Company'
      }
    },
    {
      id: '4',
      quote:
        'WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.',
      stars: 5,
      project: {
        type: 'Product Development',
        company: 'Ferry Booking Platform'
      }
    }, {
      id: '5',
      quote:
        'They are very understanding with us as it is our first time working with agile methodologies.',
      stars: 5,
      project: {
        type: 'Software Development',
        company: 'InJob Online'
      }
    }
  ],
  HireTopTalent: {
    subtitle: 'white-glove service',
    title: '3 Reasons to choose WeDevelop',
    reasons: [{
      id: '1',
      imageURL: StrongTalent,
      title: 'Strong Talent',
      description: 'We\'ve iterated our vetting process to make sure you get the best professionals.',
      toggleContent: (
        <>
          <p>
            Our sophisticated vetting process ensures that you get the <b>best LATAM professionals</b>.
          </p>
          <p>
            We've built an extensive recruiting network over the years to guarantee quick access to <b>highly talented people</b>.
          </p>
          <p>
            Only the Top 3% of the Talent pass our strict vetting process, which grants that <b>you'll get the best of the best</b>.
          </p>
        </>
      )
    }, {
      id: '2',
      imageURL: WhiteGloveService,
      title: 'White Glove Service',
      description: 'We strive to provide you the best IT Staffing services you\'ll find.',
      toggleContent: (
        <>
          <p>
            The primary goal of our customer-centric service is to <b>make you happy</b>.
          </p>
          <p>
            We tailor every aspect of it based on your needs. We believe that be can always do better. And we want to.
          </p>
          <p>
            If you want to enjoy an <b>exquisite outsourcing service</b>, we invite you to try ours.
          </p>
        </>
      )
    }, {
      id: '3',
      imageURL: HighValues,
      title: 'High Values',
      description: 'We pride ourselves on being very transparent, trustworthy, and dedicated.',
      toggleContent: (
        <>
          <p>
            We're proud to say that we're <b>a team you'll love to work with</b>.
          </p>
          <p>
            We're <b>a people-first company</b>, that loves to grow organically as the result of the growth of its collaborators, clients, and partners.
          </p>
          <p>
            We believe that <b>crystal-clear communication</b>, <b>openess</b>, and <b>transparency</b> create a rich work environment.
          </p>
          <Button
            as={InternalLink}
            href='/about-us#values'
            variant={['secondary', 'black']}
          >
            Read more
          </Button>
        </>
      )
    }],
    buttonText: 'Get In Touch'
  },
  FAQs: {
    icon: FaqsIcon,
    title: 'FAQs',
    description: 'Get instant answers for the most common doubts about our process and general topics',
    noAnswerCTA: {
      description: 'Can\'t find an answer?',
      buttonText: 'Get in touch with us'
    },
    frequentlyQuestions: [
      {
        id: 1,
        question: 'Who is WeDevelop?',
        answer: (
          <>
            <p>
              We're a us-based 100% remote company made of people from all around Latin America and the US.
            </p>
            <p>
              We strive to provide the best Nearshore outsourcing services.
            </p>
            <p>
              You may find we aren't the cheapest option but our quality is outstanding and always improving.
            </p>
          </>
        )
      },
      {
        id: 2,
        question: 'What is the no-risk trial period for developers?',
        answer: (
          <>
            <p>
              All of our Staffing contracts come with a 15-day risk-free trial period.
              Which means you can engage with us and test the quality of our service for 15 days.
            </p>
            <p>
              Should you not be satisfied, you get your money back. Period.
            </p>
            <p>
              We're humbled to mention that we have a 100% success rate :)
            </p>
          </>
        )
      },
      {
        id: 3,
        question: 'What if I am not satisfied with the work of your developer?',
        answer: (
          <p>
            We make sure the candidates we provide are the best fit for the positions you need to cover.
            However, if you're not satisfied with any of the developers, we change them as soon as possible.
          </p>
        )
      },
      {
        id: 4,
        question: 'What does a Staffing contract look like?',
        answer: (
          <>
            <p>
              When you're ready to engage formally with us, we sign an MSA (Master Service Agreement)
              that outlines the general legal framework for our relationship.
            </p>
            <p>
              Then, we execute a SOW (Scope Of Work) for each individual contractor you hire.
            </p>
            <p>
              And, of course, we also execute an NDA (Non-Disclosure Agreement).
            </p>
          </>
        )
      },
      {
        id: 5,
        question: 'How long until you present candidates to me?',
        answer: (
          <>
            <p>
              Once we've got the Job Description and all the details for the position(s) you need to cover,
              we'll 1) take a look at our Talent Pool to see if we have matching candidates and/or 2) start a new search.
            </p>
            <p>
              In the best case, you'll have a few fully-vetted good candidates by the day after our call.
            </p>
            <p>
              Otherwise, new searches take 1 to 3 weeks, depending on the complexity of the Job Description.
            </p>
          </>
        )
      },
      {
        id: 6,
        question: 'What is the cost of outsourcing to LATAM?',
        answer: (
          <>
            <p>
              To put it simple, it's in the middle of hiring on US soil and outsourcing to Western Europe or Asia.
            </p>
            <p>
              Latin America has been known to be a great Nearshore location. The quality of the talent
              is exceptional and prices are totally affordable and reasonable.
            </p>
            <p>
              If you want to get a quote for a specific project or position, please feel free to reach out.
            </p>
          </>
        )
      },
      {
        id: 7,
        question: 'Do you work with freelancers or part-time developers?',
        answer: (
          <>
            <p>
              No. We only engage in full-time long-term relationships.
            </p>
            <p>
              We've learned that freelancers or part-time developers aren't fully connected with the project.
              And the same happens with developers that work only a few months on a project before moving to the next.
            </p>
            <p>
              It's in WeDevelop's DNA to engage in long-term relationships to help you grow your business as we grow ours.
            </p>
          </>
        )
      },
      {
        id: 8,
        question: 'What are the main locations you source from?',
        answer: (
          <>
            <p>
              We've created an extensive recruiting network that helped us find niches for different technologies.
              So, for example, if you need Blockchain developers, we know where the best are.
            </p>
            <p>
              However, in terms of stats, our top 5 locations are: Argentina, Brazil, Colombia, Uruguay, and Costa Rica.
            </p>
          </>
        )
      },
      {
        id: 9,
        question: 'What timezone are you in?',
        answer: (
          <p>
            Between GMT-6 to GMT-3.
          </p>
        )
      },
      {
        id: 10,
        question: 'How do you check the developers\' English level?',
        answer: (
          <p>
            We check their English level in every interview during the process. In addition, there is a specific
            step when they have an interview with a native english teacher who evaluates the candidates' english
            level, focusing especially on their speaking fluency and clarity.
          </p>
        )
      }
    ]
  },
  fullSizeCTA: {
    title: 'Ready to grow your IT Staff?',
    subTitle: 'GET YOUR QUOTE NOW',
    ctaText: 'Get a Free Quote',
    ctaToPath: '#top',
    description:
      'At WeDevelop, we help you expand your IT staff so you can complete projects faster and save money by the hour.'
  },
  backgrounds: {
    firstBackground: WeDevLaptops,
    secondBackground: BookLaptop
  }
}

export default defaultContent
