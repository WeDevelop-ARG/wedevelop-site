import DefaultBackground from 'assets/web_developers/backgrounds/bg_web_developers.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import BookLaptop from 'assets/web_developers/backgrounds/book_laptop.png'

import TimeZoneIcon from 'assets/staff_augmentation/timezone_globe.component.svg'
import CulturalClosenessIcon from 'assets/staff_augmentation/cultural_closeness.component.svg'
import LevelOfEnglishIcon from 'assets/staff_augmentation/language.component.svg'
import PriceQualityIcon from 'assets/staff_augmentation/price_quality.component.svg'

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
    title: '3 reasons to choose WeDevelop',
    description: '',
    content: (
      <>
        <ul>
          <li>
            <b>Strong Talent</b> - We've iterated our vetting process to make
            sure you get the best professionals.
            <hr />
          </li>
          <li>
            <b>White Glove Service</b> - We strive to provide you the best IT
            Staffing services you'll find.
            <hr />
          </li>
          <li>
            <b>High Values</b> - We pride ourselves on being very transparent,
            trustworthy, and dedicated.
          </li>
        </ul>
      </>
    ),
    buttonText: 'Get In Touch'
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
