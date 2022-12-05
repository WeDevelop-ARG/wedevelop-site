import CultureIcon from 'assets/services/staff_aug_our_process/culture-icon.component.svg'
import TodoListIcon from 'assets/services/staff_aug_our_process/todo-list-icon.component.svg'
import TickBoxIcon from 'assets/services/staff_aug_our_process/tick-box-icon.component.svg'

export default function useGetOurProcessSteps () {
  const steps = [
    {
      id: '1',
      icon: <CultureIcon />,
      heading: 'Let\'s Begin:',
      title: 'All Hands On Deck!',
      description: (
        <>
          Your journey with us begins by
          <span> sending us the requirements and position description you need </span>
          to cover. It doesn’t matter if you don't have one already, we can craft one together.
        </>
      )
    },
    {
      id: '2',
      icon: <TodoListIcon />,
      heading: 'Next Step:',
      title: 'Kicking Off Your Plan',
      description: (
        <>
          Once we have outlined and tailored our solutions, we move on to the next step:
          <span> finding the perfect match!</span> We put our sophisticated hiring
          methodology in motion and source up to three expert
          <span> candidates within 48 hours only.</span> In case you don't find the right
          fit for the position, we start over the process taking between 1-2 weeks.
        </>
      )
    },
    {
      id: '3',
      icon: <TickBoxIcon />,
      heading: 'Final Stage:',
      title: 'It’s A Match!',
      description: (
        <>
          Finally, we introduce you to your next hire, handpicked especially to match
          your project needs. And what's best, <span>you have a 15-day money-back trial period. </span>
          Wait no longer and save time and money on your next software development project with WeDevelop!
        </>
      )
    }
  ]

  return {
    steps
  }
}
