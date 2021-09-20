import JennyWilson from 'assets/hire_developers/profiles/jenny_wilson.png'
import GeoffreyMott from 'assets/hire_developers/profiles/geoffrey_mott.png'
import RodolfoGoode from 'assets/hire_developers/profiles/rodolfo_goode.png'
import LeatriceHandler from 'assets/hire_developers/profiles/leatrice_handler.png'
import FlorencioDorrance from 'assets/hire_developers/profiles/florencio_dorrance.png'
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
        devImgURL: JennyWilson,
        devName: 'Jenny Wilson',
        devRole: 'Javascript Developer',
        devSkills: [
          {
            skill: 'Java',
            color: 'yellow'
          },
          {
            skill: 'Javascript',
            color: 'gray'
          },
          {
            skill: 'MySQL',
            color: 'black'
          },
          {
            skill: 'Angular',
            color: 'red'
          },
          {
            skill: 'Vue.js',
            color: 'green'
          }
        ],
        devExperience: '+7 years',
        devRate: '$$ / h'
      },
      {
        id: '2',
        devImgURL: GeoffreyMott,
        devName: 'Geoffrey Mott',
        devRole: 'Full-Stack Developer',
        devSkills: [
          {
            skill: 'Python',
            color: 'black'
          },
          {
            skill: 'PHP',
            color: 'blue'
          },
          {
            skill: 'Vue.js',
            color: 'green'
          }
        ],
        devExperience: '+12 years',
        devRate: '$$$ / h'
      },
      {
        id: '3',
        devImgURL: RodolfoGoode,
        devName: 'Rodolfo Goode',
        devRole: 'Ruby on Rails Developer',
        devSkills: [
          {
            skill: 'Java',
            color: 'yellow'
          },
          {
            skill: 'Javascript',
            color: 'gray'
          },
          {
            skill: 'MySQL',
            color: 'black'
          },
          {
            skill: 'Angular',
            color: 'red'
          },
          {
            skill: 'Vue.js',
            color: 'green'
          }
        ],
        devExperience: '+3 years',
        devRate: '$ / h'
      },
      {
        id: '4',
        devImgURL: LeatriceHandler,
        devName: 'Leatrice Handler',
        devRole: 'Python Developer',
        devSkills: [
          {
            skill: 'Java',
            color: 'yellow'
          },
          {
            skill: 'Javascript',
            color: 'gray'
          },
          {
            skill: 'MySQL',
            color: 'black'
          },
          {
            skill: 'Angular',
            color: 'red'
          },
          {
            skill: 'Vue.js',
            color: 'green'
          }
        ],
        devExperience: '+9 years',
        devRate: '$$ / h'
      },
      {
        id: '5',
        devImgURL: FlorencioDorrance,
        devName: 'Florencio Dorrance',
        devRole: 'QA Engineer',
        devSkills: [
          {
            skill: 'Java',
            color: 'yellow'
          },
          {
            skill: 'Javascript',
            color: 'gray'
          },
          {
            skill: 'MySQL',
            color: 'black'
          },
          {
            skill: 'Angular',
            color: 'red'
          },
          {
            skill: 'Vue.js',
            color: 'green'
          }
        ],
        devExperience: '+11 years',
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
