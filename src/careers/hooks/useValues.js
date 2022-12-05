import TimezoneIcon from 'assets/career/our_culture/timezone-icon.svg'

export default function useValues () {
  const values = [
    {
      id: '1',
      icon: TimezoneIcon,
      title: 'Transparency',
      description: 'Have complete visibility of your project roadmap'
    },
    {
      id: '2',
      icon: TimezoneIcon,
      title: 'Efficient Communication',
      description: 'We are all about proactive and clear communication'
    },
    {
      id: '3',
      icon: TimezoneIcon,
      title: 'People First',
      description: 'Our main goal is to create a healthy workplace for our talent to thrive'
    },
    {
      id: '4',
      icon: TimezoneIcon,
      title: 'Trust',
      description: 'Trust is embedded in our ethos and guides every step'
    }
  ]

  return {
    values
  }
}
