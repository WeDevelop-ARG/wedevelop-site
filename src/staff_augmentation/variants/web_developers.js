import JonathanM from 'assets/hire_developers/profiles/jonathan_m.jpg'
import AlejandraL from 'assets/hire_developers/profiles/alejandra_l.jpg'
import LeonardoC from 'assets/hire_developers/profiles/leonardo_c.jpeg'
import MarcoP from 'assets/hire_developers/profiles/marco_p.jpg'
import RicardoC from 'assets/hire_developers/profiles/ricardo_c.jpg'
import RobertinoN from 'assets/hire_developers/profiles/robertino_n.jpeg'

import BgWebDevelopers from 'assets/web_developers/backgrounds/bg_web_developers.png'
import WeDevLaptops from 'assets/web_developers/backgrounds/wedev_laptops.png'
import BookLaptop from 'assets/web_developers/backgrounds/book_laptop.png'
import picturebgWdev from 'assets/staff_augmentation/picturebgWdev.png'

const webDevelopers = {
  pathName: 'web-developers',
  metadata: {
    title: 'Web Development Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    landingName: <>web developers</>,
    title: <>Talent that delivers like your <b>Dream Team</b> would</>,
    description: (
      <>
        <p>Get the ultimate outcomes from the Top Web Developers without the hiring hassles.</p>
      </>
    ),
    sideImageURL: BgWebDevelopers,
    backgroundColor: '#361989'
  },
  freeQuoteForm: {
    formHeader: {
      subtitle: 'Get in touch',
      title: 'Sign Up to Get Rates & Available Staff Details',
      description: 'We look forward to learning how WeDevelop can help you and your business.'
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
          label: 'What are you looking for?',
          placeholder: 'A Full-Stack Node and React Developer'
        }
      }
    },
    formOrigin: 'web-developers',
    formButtonText: 'Get a free quote',
    formDisclaimer: 'We typically reply every email within an hour.'
  },
  reviews: {
    subtitle: 'Customers reviews',
    title: 'The TOP IT Staffing Agency as our customers say',
    description: 'Don\'t take our word for it. See what our customers say.',
    reviews: [{
      id: '1',
      quote: 'They’re a well-rounded team, which is conducive to troubleshooting [and] having difficult conversations.',
      stars: 5,
      project: {
        type: 'App Development',
        company: 'Online Fitness Company'
      }
    }, {
      id: '2',
      quote: 'They’re willing to engage with a problem to figure it out rather than waiting to be told what to do.',
      stars: 5,
      project: {
        type: 'Software Development',
        company: 'Sports Betting Startup'
      }
    }, {
      id: '3',
      quote: 'The project cost about half of what it would have had we hired local engineers.',
      stars: 5,
      project: {
        type: 'Web App Development',
        company: 'Loan Company'
      }
    }, {
      id: '4',
      quote: 'WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.',
      stars: 5,
      project: {
        type: 'Product Development',
        company: 'Ferry Booking Platform'
      }
    }],
    buttonText: 'Get a Free Quote'
  },
  GrowFaster: {
    subtitle: 'Efficiency',
    title: <>Save Time, <br /> grow faster</>,
    description: '',
    content: (
      <>
        <p>
          Hiring the wrong person can cost thousands of dollars
          and hours of wasted time.
        </p>
        <p>
          At WeDevelop, <b>we've already put in the groundwork.</b>
        </p>
        <p>
          We have access to the best Talent for your company’s
          needs, allowing you to focus on growing your business
          instead of trying to find new staff members.
        </p>
        <p>
          Stop spending time and resources on Interviews. If you
          want to grow your company’s IT Staff quickly
        </p>
      </>
    ),
    buttonText: 'Get a Free Quote',
    imageURL: picturebgWdev
  },
  HireTopTalent: {
    subtitle: 'top talent',
    title: 'Hire Top Talent Only, Without Hassle',
    description: '',
    content: (
      <>
        <ul>
          <li>
            Hiring the right person is hard.
            Especially if you're <b>looking for someone with specific skills and experience</b> in a particular tecnology.
          </li>
          <li>
            At, WeDevelop, <b>we match people to clients based on skill sets</b>, interests, culture, and location & provide several options that meet your requirements.
            Hire top talent from around In Latin America without having to go through the hassle of interviewing them yourself.
          </li>
          <li>
            <b>Focus on other important things</b> such as growing your business and meeting deadlines.
          </li>
        </ul>
      </>
    ),
    buttonText: 'Get a Free Quote'
  },
  growToday: {
    subtitle: 'Efficiency',
    title: 'Grow today',
    description: 'Let us alleviate that burden. Save time. Grow Efficiently.',
    content: (
      <>
        We send you a list of candidates today along with their rates
        and easy-to-read resumes. Your time is too precious to be dealing
        with <b>Recruiting, Screening, Selection, Interviewing, Hiring</b>,
        and more.
      </>
    ),
    buttonText: 'Get a Free Quote'
  },
  fullSizeCTA: {
    title: 'Ready to grow your IT Staff?',
    subTitle: 'GET YOUR QUOTE NOW',
    ctaText: 'Get your quote now',
    ctaToPath: '#top',
    ctaIncentive: 'We typically reply every email within an hour.',
    description: 'Vitae habitant blandit adipiscing porta. Nulla tortor, eu consectetur nunc.',
    variant: 'notBackground'
  },
  availableDevs: {
    subtitle: 'Hire Engineers',
    title: 'Pick your new Web Developer Today',
    description: 'Get instant access to our Talent Pool of 20+ vetted engineers.',
    format: 'carousel',
    buttonText: 'Get a Free Quote',
    devs: [
      {
        id: '1',
        devImgURL: JonathanM,
        devName: 'Jonathan M.',
        devRole: 'IT Project Manager',
        devSkills: [
          {
            skill: 'SCRUM',
            color: 'yellow'
          },
          {
            skill: 'Python',
            color: 'black'
          },
          {
            skill: 'Ruby',
            color: 'red'
          }
        ],
        devExperience: '+7 years',
        devRate: '$$ / h'
      },
      {
        id: '2',
        devImgURL: RobertinoN,
        devName: 'Robertino N.',
        devRole: 'Full-Stack Javascript Developer',
        devSkills: [
          {
            skill: 'Node.js',
            color: 'blue'
          },
          {
            skill: 'React',
            color: 'green'
          },
          {
            skill: 'PostgreSQL',
            color: 'gray'
          },
          {
            skill: 'AWS',
            color: 'yellow'
          }
        ],
        devExperience: '+5 years',
        devRate: '$ / h'
      },
      {
        id: '3',
        devImgURL: MarcoP,
        devName: 'Marco P.',
        devRole: '.NET Developer',
        devSkills: [
          {
            skill: '.NET',
            color: 'black'
          },
          {
            skill: 'MySQL',
            color: 'gray'
          },
          {
            skill: 'PostgreSQL',
            color: 'gray'
          },
          {
            skill: 'Javascript',
            color: 'red'
          }
        ],
        devExperience: '+8 years',
        devRate: '$$ / h'
      },
      {
        id: '4',
        devImgURL: RicardoC,
        devName: 'Ricardo C.',
        devRole: 'PHP Developer',
        devSkills: [
          {
            skill: 'PHP',
            color: 'blue'
          },
          {
            skill: 'Laravel',
            color: 'gray'
          },
          {
            skill: 'SQL Server',
            color: 'black'
          },
          {
            skill: 'Woocommerce',
            color: 'red'
          }
        ],
        devExperience: '+6 years',
        devRate: '$ / h'
      },
      {
        id: '5',
        devImgURL: LeonardoC,
        devName: 'Leonardo C.',
        devRole: 'QA Engineer',
        devSkills: [
          {
            skill: 'Selenium',
            color: 'yellow'
          },
          {
            skill: 'Postman',
            color: 'gray'
          },
          {
            skill: 'BDD',
            color: 'black'
          },
          {
            skill: 'Jira',
            color: 'red'
          }
        ],
        devExperience: '+7 years',
        devRate: '$$$ / h'
      },
      {
        id: '6',
        devImgURL: AlejandraL,
        devName: 'Alejandra L.',
        devRole: 'React Developer',
        devSkills: [
          {
            skill: 'Node.js',
            color: 'blue'
          },
          {
            skill: 'Symfony',
            color: 'gray'
          },
          {
            skill: 'React',
            color: 'red'
          },
          {
            skill: 'PHP',
            color: 'blue'
          }
        ],
        devExperience: '+6 years',
        devRate: '$$$ / h'
      }
    ]
  },
  backgrounds: {
    firstBackground: WeDevLaptops,
    secondBackground: BookLaptop
  }
}

export default webDevelopers
