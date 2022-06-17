import Button from 'main_app/components/Button'

import StepOne from 'assets/how_does_it_works/icons/step_one.component.svg'
import StepTwo from 'assets/how_does_it_works/icons/step_two.component.svg'
import StepThree from 'assets/how_does_it_works/icons/step_three.component.svg'

export function useStep ({
  handleContactCTAClick,
  handleScheduleMeetingCTAClick
}) {
  return [
    {
      id: 1,
      icon: <StepOne />,
      title: 'Send us your Job Description',
      description: (
        <>
          <ul>
            <li>
              If you don’t have one, we can help you craft one.
            </li>
            <li>
              We put special attention to this very first step because
              we want to know exactly how the person that will make your
              life easier is.
            </li>
            <li>
              Our solutions are always tailored to your needs.
            </li>
          </ul>
          <Button
            variant={['link', 'black', 'bold']}
            onClick={handleContactCTAClick}
          >
            Complete our form and we’ll set up a call with one of our Managers.
          </Button>
        </>
      )
    },
    {
      id: 2,
      icon: <StepTwo />,
      title: 'Meet your perfect developer',
      description: (
        <>
          <ul>
            <li>
              Using our sophisticated matching process, we watch you with up
              to 3 expert developers within 48 hours.
            </li>
            <li>
              If we don't find a match, we start a new search, which its takes
              usually 1-2 weeks.
            </li>
          </ul>
          <p>
            <b>75% hire the fist match we make.</b>
          </p>
        </>
      )
    },
    {
      id: 3,
      icon: <StepThree />,
      title: 'Save time and money',
      description: (
        <>
          <ul>
            <li>
              Once you meet one of our excellent hand-picked developers, things will move real fast.
            </li>
            <li>
              We'll be there to make sure everything runs smoothly.
            </li>
            <li>
              No recruitment fees
            </li>
          </ul>
          <p>
            <b>15-days money back trial period.</b>
          </p>
        </>
      )
    }
  ]
}
