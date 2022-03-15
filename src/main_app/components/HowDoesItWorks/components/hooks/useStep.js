import StepOne from 'assets/how_does_it_works/icons/step_one.component.svg'
import StepOneMobileArrow from 'assets/how_does_it_works/arrows/step_one_mobile_arrow.svg'
import StepTwo from 'assets/how_does_it_works/icons/step_two.component.svg'
import StepTwoMobileArrow from 'assets/how_does_it_works/arrows/step_two_mobile_arrow.svg'
import StepThree from 'assets/how_does_it_works/icons/step_three.component.svg'
import StepThreeMobileArrow from 'assets/how_does_it_works/arrows/step_three_mobile_arrow.svg'
import StepFour from 'assets/how_does_it_works/icons/step_four.component.svg'

const steps = [
  {
    id: 1,
    icon: <StepOne />,
    title: 'Let us know your needs',
    description: (
      <>
        <ul>
          <li>
            You can fill <span>this form</span> or
          </li>
          <li>
            <span>Schedule a call</span> when it works best for you.
          </li>
        </ul>
      </>
    ),
    mobileArrow: StepOneMobileArrow
  },
  {
    id: 2,
    icon: <StepTwo />,
    title: 'Job Description',
    description: (
      <>
        <ul>
          <li>
            If you have a JD, we'll base our recruiting process on it;
          </li>
          <li>
            Otherwise, we'll help you create one.
          </li>
          <li>
            If there are any candidates that match the JD, we'll present them right away!
          </li>
        </ul>
      </>
    ),
    mobileArrow: StepTwoMobileArrow
  },
  {
    id: 3,
    icon: <StepThree />,
    title: 'Candidate selection',
    description: (
      <>
        <ul>
          <li>
            In a few days, you'll receive a list of fully vetted candidates for you.
          </li>
          <li>
            We'll check that the candidates are a great fit technically and culturally,
            and that they speak English fluently and clearly.
          </li>
          <li>
            You'll continue to receive new candidates every few days.
          </li>
        </ul>
      </>
    ),
    mobileArrow: StepThreeMobileArrow
  },
  {
    id: 4,
    icon: <StepFour />,
    title: 'Hiring & Onboarding',
    description: (
      <>
        <ul>
          <li>
            Once you've decided which candidate you want to hire, we'll do all the paperwork and guide you through the process.
          </li>
          <li>
            We'll take care of the legal relationship with the contractor.
          </li>
          <li>
            Also, we'll help the candidates to ramp up into the project smoothly.
          </li>
        </ul>
      </>
    )
  }
]

const useStep = () => steps

export { useStep }
