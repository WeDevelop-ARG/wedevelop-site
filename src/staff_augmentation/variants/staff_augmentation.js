import MaleUsingComputer from 'assets/staff_augmentation/male_computer.png'
import MaleSalesSolutions from 'assets/staff_augmentation/male_sales_solutions.png'
import BrandGradient from 'main_app/components/TextGradient'
import BgStaffAugmentation from 'assets/staff_augmentation/bg_staff_augmentation.png'

const staffAugmentation = {
  pathName: 'staff-augmentation',
  metadata: {
    title: 'Nearshore IT Staffing company',
    description: 'Add the right Talent for your time in no time. Get a free quote in the next hour!'
  },
  header: {
    landingName: <>staff augmentation</>,
    title: <>The <b>right IT Staffing</b> agency for</>,
    description: (
      <>
        <p>Get access to the top Software Engineers in Latin America.</p>
        <p>Fast, without the hiring hassles.</p>
      </>
    ),
    formDescription: 'Sign Up to Get Rates & Available Staff Details',
    formOrigin: 'staff-augmentation',
    formCustomizations: {
      fixedFieldsPlaceholders: {
        name: 'Your name',
        email: 'Your work email',
        message: 'What are you looking for?'
      }
    },
    sideImageURL: BgStaffAugmentation,
    submitButtonText: 'Get a free quote',
    backgroundColor: '#377DFF'
  },
  reviews: {
    subtitle: 'Customers reviews',
    title: 'The TOP IT Staffing as our customers say',
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
    }]
  },
  HireTopTalent: {
    subtitle: 'top talent',
    title: 'Hire Top Talent Only, Without Hassle',
    description: 'Purus elit viverra nec mus. Euismod non suscipit id lobortis vel',
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
    buttonText: 'Get a Free Quote',
    buttonLink: '#'
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
    buttonText: 'Get a Free Quote',
    buttonLink: '#'
  },
  sectionsWithSideImage: [{
    id: '1',
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
    id: '2',
    imageURL: MaleSalesSolutions,
    title: <>Save time, <BrandGradient>grow faster</BrandGradient></>,
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
  fullSizeCTA: {
    title: 'Ready to grow your IT Staff?',
    subTitle: 'GET YOUR QUOTE NOW',
    ctaText: 'Get a Free Quote',
    ctaToPath: '#top',
    description: 'Vitae habitant blandit adipiscing porta, Nulla tortor, eu consectetur nunc.'
  }
}

export default staffAugmentation
