import BrandGradient from 'main_app/components/TextGradient'
import BgHireDevelopers from 'assets/hire_developers/backgrounds/bg_hire_developers.png'
import AbelImg from 'assets/hire_developers/abel_profile.png'
import NahuelImg from 'assets/hire_developers/nahuel_profile.png'
import VaninaImg from 'assets/hire_developers/vanina_profile.png'
import JSLogo from 'assets/hire_developers/javascript.png'
import PythonLogo from 'assets/hire_developers/python.png'
import AngularLogo from 'assets/hire_developers/angular.png'
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
        <p>Hire the Top Web Developers without the hiring hassles.</p>
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
    title: <>Pick your <BrandGradient>Next Developer</BrandGradient></>,
    devs: [
      {
        id: '1',
        devImgURL: AbelImg,
        devRole: 'Full Stack Developer',
        techLogoURL: JSLogo,
        devDescription: '7 years experience',
        devRate: '12'
      },
      {
        id: '2',
        devImgURL: NahuelImg,
        devRole: 'Backend Engineer',
        techLogoURL: PythonLogo,
        devDescription: 'Former Google',
        devRate: '15'
      },
      {
        id: '3',
        devImgURL: VaninaImg,
        devRole: 'Frontend Specialist',
        techLogoURL: AngularLogo,
        devDescription: 'Experience leading teams',
        devRate: '10'
      }
    ]
  },
  fullSizeCTA: {
    title: 'Ready to hire your new Developer?',
    subTitle: 'GET PROFILES NOW',
    ctaText: 'Get profiles and rates',
    ctaToPath: '#top',
    ctaIncentive: 'We typically reply every email within an hour.',
    description: 'Get a list of available staff with their rates.',
    variant: 'reverse_items'
  },
  backgrounds: {
    firstBackground: HoldingBook,
    secondBackground: CodeScreen,
    thirdBackground: BookLaptop
  }
}

export default hireDevelopers
