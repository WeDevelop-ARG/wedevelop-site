import Button from 'main_app/components/Button'

import StepOne from 'assets/how_does_it_works/icons/step_one.component.svg'
import StepOneMobileArrow from 'assets/how_does_it_works/arrows/step_one_mobile_arrow.svg'
import StepTwo from 'assets/how_does_it_works/icons/step_two.component.svg'
import StepTwoMobileArrow from 'assets/how_does_it_works/arrows/step_two_mobile_arrow.svg'
import StepThree from 'assets/how_does_it_works/icons/step_three.component.svg'
import StepThreeMobileArrow from 'assets/how_does_it_works/arrows/step_three_mobile_arrow.svg'
import StepFour from 'assets/how_does_it_works/icons/step_four.component.svg'

export function useStep ({
  handleContactCTAClick,
  handleScheduleMeetingCTAClick
}) {
  return [
    {
      id: 1,
      icon: <StepOne />,
      title: 'Let us know your needs',
      description: (
        <>
          <ul>
            <li>
              You can fill out{' '}
              <Button
                variant={['link', 'black', 'bold']}
                onClick={handleContactCTAClick}
              >
                this form
              </Button> or
            </li>
            <li>
              <Button
                variant={['link', 'black', 'bold']}
                onClick={handleScheduleMeetingCTAClick}
              >
                Schedule a call
              </Button> when it works best for you.
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
              Otherwise, we'll help you put one together.
            </li>
            <li>
              If there are any candidates that match the JD,
              we'll present them to you right away!
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
              In a few days, you'll receive a list of fully vetted candidates.
            </li>
            <li>
              We'll make sure that the candidates are a great fit technically and culturally,
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
              We'll also help the candidates onboard smoothly.
            </li>
          </ul>
        </>
      )
    }
  ]
}
