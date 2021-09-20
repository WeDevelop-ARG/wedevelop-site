import JonathanM from 'assets/hire_developers/profiles/jonathan_m.jpg'
import AlejandraL from 'assets/hire_developers/profiles/alejandra_l.jpg'
import LeonardoC from 'assets/hire_developers/profiles/leonardo_c.jpeg'
import MarcoP from 'assets/hire_developers/profiles/marco_p.jpg'
import RicardoC from 'assets/hire_developers/profiles/ricardo_c.jpg'
import RobertinoN from 'assets/hire_developers/profiles/robertino_n.jpeg'

import BgHireDevelopers from 'assets/hire_developers/backgrounds/bg_hire_developers.png'
import HoldingBook from 'assets/hire_developers/backgrounds/holding_book.png'
import CodeScreen from 'assets/hire_developers/backgrounds/code_screen.png'
import BookLaptop from 'assets/hire_developers/backgrounds/book_laptop.png'
import picturebgHdev from 'assets/hire_developers/picturebgHdev.png'

const hireDevelopers = {
  pathName: 'hire-developers',
  metadata: {
    title: 'IT Staffing Agency',
    description: 'Hire Developers and Development Teams.'
  },
  header: {
    landingName: <>hire developers</>,
    title: <>Hire Developers and Development Teams</>,
    description: (
      <>
        <p>Hire Top Web Developers without the hiring hassles.</p>
      </>
    ),
    sideImageURL: BgHireDevelopers,
    backgroundColor: '#8224E3'
  },
  freeQuoteForm: {
    formHeader: {
      subtitle: 'Get profiles',
      title: 'Get Developer Profiles',
      description: 'Fill out the form and Get Developer Profiles and Developer Rates.'
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
          label: 'Requirement',
          placeholder: 'I need a Full-Stack Node and React Developer for a 6-month project.'
        }
      }
    },
    formOrigin: 'hire-developers',
    formButtonText: 'Get profiles and rates',
    formDisclaimer: 'We\'ll email you available staff and their rates within the next hour.'
  },
  reviews: {
    subtitle: 'Customers reviews',
    title: 'The TOP IT Staffing Agency, as our customers say',
    description: 'Don\'t take our word for it:',
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
    imageURL: picturebgHdev
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
        We'll send you a list of candidates today along with their rates
        and easy-to-read resumes. Your time is too precious to be dealing
        with <b>Recruiting, Screening, Selection, Interviewing, Hiring</b>,
        and more.
      </>
    ),
    buttonText: 'Get a Free Quote'
  },
  availableDevs: {
    subtitle: 'Hire Engineers',
    title: 'Pick your new Web Developer Today',
    description: 'Get instant access to our Talent Pool of 20+ vetted engineers.',
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
    firstBackground: HoldingBook,
    secondBackground: CodeScreen,
    thirdBackground: BookLaptop
  }
}

export default hireDevelopers
