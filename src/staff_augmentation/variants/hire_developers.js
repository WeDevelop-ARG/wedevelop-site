import MaleInVideocall from 'assets/staff_augmentation/male_videocall.png'
import MaleUsingComputer from 'assets/staff_augmentation/male_computer.png'
import MaleSalesSolutions from 'assets/staff_augmentation/male_sales_solutions.png'
import BrandGradient from 'main_app/components/TextGradient'
import AbelLaptop from 'assets/staff_augmentation/abel_laptop.png'
import JennyWilson from 'assets/hire_developers/profiles/jenny_wilson.png'
import GeoffreyMott from 'assets/hire_developers/profiles/geoffrey_mott.png'
import RodolfoGoode from 'assets/hire_developers/profiles/rodolfo_goode.png'
import LeatriceHandler from 'assets/hire_developers/profiles/leatrice_handler.png'
import FlorencioDorrance from 'assets/hire_developers/profiles/florencio_dorrance.png'

const hireDevelopers = {
  pathName: 'hire-developers',
  metadata: {
    title: 'Web Development Agency',
    description: 'Outsource with Us and Accelerate your Digital Transformation.'
  },
  header: {
    title: <>Talent that delivers like <BrandGradient>your Dream Team</BrandGradient> would</>,
    description: (
      <>
        <p>Get the ultimate outcomes from the Top Web Developers without the hiring hassles.</p>
      </>
    ),
    formDescription: 'Sign Up to Get Rates & Available Staff Details',
    formOrigin: 'hire-developers',
    formCustomizations: {
      fixedFieldsPlaceholders: {
        name: 'Your name',
        email: 'Your work email',
        message: 'What are you looking for?'
      }
    },
    sideImageURL: AbelLaptop,
    submitButtonText: 'Get a free quote'
  },
  reviews: {
    title: <>We trust our Customers' words</>,
    reviews: [{
      id: '1',
      quote: 'They’re a well-rounded team, which is conducive to troubleshooting [and] having difficult conversations.',
      stars: 5,
      project: 'App Development for Online Fitness Company'
    }, {
      id: '2',
      quote: 'They’re willing to engage with a problem to figure it out rather than waiting to be told what to do.',
      stars: 5,
      project: 'Software Development for Sports Betting Startup'
    }, {
      id: '3',
      quote: 'The project cost about half of what it would have had we hired local engineers.',
      stars: 5,
      project: 'Web App Development for Loan Company'
    }, {
      id: '4',
      quote: 'WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.',
      stars: 5,
      project: 'Product Development for Ferry Booking Platform'
    }]
  },
  sectionsWithSideImage: [{
    id: '1',
    imageURL: MaleInVideocall,
    title: <>Grow <BrandGradient>today</BrandGradient></>,
    description: (
      <>
        <p>
          We send you a list of candidates today along with their rates
          and easy-to-read resumes.
        </p>
        <p>
          <b>Your time is too precious</b> to be dealing with Recruiting,
          Screening, Selection, Interviewing, Hiring, and more.
        </p>
        <p>Let us alleviate that burden. Save time. Grow Efficiently.</p>
      </>
    )
  }, {
    id: '2',
    imageURL: MaleUsingComputer,
    title: <>Hire Top Talent Only, <BrandGradient>Without Hassle</BrandGradient></>,
    description: (
      <>
        <p>
          Hiring the right person is hard. Especially if you're looking for someone with
          specific skills and experience in a particular tecnology.
        </p>
        <p>
          At, WeDevelop, we match people to clients based on skill sets, interests, culture,
          and location & provide several options that meet your requirements. Hire top
          talent from around In Latin America without having to go through the hassle of
          interviewing them yourself.
        </p>
        <p>Focus on other important things such as growing your business and meeting deadlines.</p>
      </>
    )
  }, {
    id: '3',
    imageURL: MaleSalesSolutions,
    title: <>Save time, <BrandGradient>Learn faster</BrandGradient></>,
    description: (
      <>
        <p>Hiring the wrong person can cost thousands of dollars and hours of wasted time.</p>
        <p>At WeDevelop, we've already put in the groundwork.</p>
        <p>
          We have access to the best Talent for your company’s needs, allowing you to focus
          on growing your business instead of trying to find new staff members.
        </p>
        <p>
          Stop spending time and resources on Interviews. If you want to grow your company’s
          IT Staff quickly
        </p>
      </>
    )
  }],
  availableDevs: {
    subtitle: 'Top Engineers',
    title: 'This is our Available Team',
    description: 'Vitae habitant blandit adipiscing porta. Nulla tortor, eu consectetur nunc. ',
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
  fullSizeCTA: {
    title: 'Ready to grow your IT Staff?',
    subTitle: 'GET YOUR QUOTE NOW',
    ctaText: 'Get your quote now',
    ctaToPath: '#top',
    ctaIncentive: 'We typically reply every email within an hour.'
  }
}

export default hireDevelopers
