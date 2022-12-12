import useBackgroundColor from 'staff_augmentation/components/AvailableDevs/use_background_colors'

import Eduardo from 'assets/home/top_engineers/profile_images/eduardo.png'
import Francisco from 'assets/home/top_engineers/profile_images/francisco.png'
import Juan from 'assets/home/top_engineers/profile_images/juan.png'
import Julian from 'assets/home/top_engineers/profile_images/julian.png'
import Lucila from 'assets/home/top_engineers/profile_images/lucila.png'
import Maria from 'assets/home/top_engineers/profile_images/maria.png'
import Mariano from 'assets/home/top_engineers/profile_images/mariano.png'
import Pablo from 'assets/home/top_engineers/profile_images/pablo.png'
import William from 'assets/home/top_engineers/profile_images/william.png'

export default function useAvailableDevs () {
  const { colors } = useBackgroundColor()

  const availableDevs = [
    {
      id: '1',
      devImgURL: Pablo,
      devName: 'Pablo L.',
      devRole: 'Backend Developer',
      devSkills: [
        { skill: 'PHP', color: colors.bdazzledBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'Angular', color: colors.red },
        { skill: 'React', color: colors.vividSkyBlue },
        { skill: 'PostgreSQL', color: colors.lighterBlack }
      ],
      devExperience: '8 yrs',
      devRate: <><span>42</span> / h</>
    },
    {
      id: '2',
      devImgURL: Maria,
      devName: 'Maria W.',
      devRole: 'Backend Developer',
      devSkills: [
        { skill: 'PHP', color: colors.bdazzledBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'MySQL', color: colors.lighterBlack },
        { skill: 'jQuery', color: colors.limeGreen },
        { skill: 'HTML', color: colors.amber }
      ],
      devExperience: '15 yrs',
      devRate: <><span>45</span> / h</>
    },
    {
      id: '3',
      devImgURL: Juan,
      devName: 'Juan V.',
      devRole: 'Frontend Developer',
      devSkills: [
        { skill: 'React', color: colors.vividSkyBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'Node.js', color: colors.citron },
        { skill: 'GraphQL', color: colors.cosmicLatte },
        { skill: 'HTML5', color: colors.scarlet }
      ],
      devExperience: '5 yrs',
      devRate: <><span>40</span> / h</>
    },
    {
      id: '4',
      devImgURL: William,
      devName: 'William O.',
      devRole: 'Frontend Developer',
      devSkills: [
        { skill: 'React', color: colors.vividSkyBlue },
        { skill: 'Angular', color: colors.red },
        { skill: 'Typescript', color: colors.spanishGray },
        { skill: 'Docker', color: colors.blueCrayola },
        { skill: 'AWS', color: colors.yellowMunsell }
      ],
      devExperience: '4 yrs',
      devRate: <><span>38</span> / h</>
    },
    {
      id: '5',
      devImgURL: Eduardo,
      devName: 'Eduardo K.',
      devRole: 'Backend Developer',
      devSkills: [
        { skill: 'PHP', color: colors.bdazzledBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'Angular', color: colors.red },
        { skill: 'Laravel', color: colors.white },
        { skill: 'Symfony', color: colors.limeGreen }
      ],
      devExperience: '14 yrs',
      devRate: <><span>43</span> / h</>
    },
    {
      id: '6',
      devImgURL: Mariano,
      devName: 'Mariano C.',
      devRole: 'Backend Developer',
      devSkills: [
        { skill: 'PHP', color: colors.bdazzledBlue },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'Laravel', color: colors.white },
        { skill: 'CSS', color: colors.plumWeb },
        { skill: 'Vue.js', color: colors.darkGreenX11 }
      ],
      devExperience: '7 yrs',
      devRate: <><span>35</span> / h</>
    },
    {
      id: '7',
      devImgURL: Lucila,
      devName: 'Lucila L.',
      devRole: 'Full-stack Developer',
      devSkills: [
        { skill: 'Golang', color: colors.lightBlack },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'GraphQL', color: colors.cosmicLatte },
        { skill: 'Kubernetes', color: colors.mediumSpringGreen },
        { skill: 'GitLab', color: colors.white }
      ],
      devExperience: '4 yrs',
      devRate: <><span>38</span> / h</>
    },
    {
      id: '8',
      devImgURL: Julian,
      devName: 'Julian J.',
      devRole: 'QA Automation Engineer',
      devSkills: [
        { skill: 'Selenium Test', color: colors.azureX11WebColor },
        { skill: 'Scrum Master', color: colors.magnolia },
        { skill: 'Agile', color: colors.canary },
        { skill: 'Javascript', color: colors.spanishGray }
      ],
      devExperience: '6 yrs',
      devRate: <><span>45</span> / h</>
    },
    {
      id: '9',
      devImgURL: Francisco,
      devName: 'Francisco N.',
      devRole: 'Full-stack Developer',
      devSkills: [
        { skill: 'Golang', color: colors.lightBlack },
        { skill: 'Javascript', color: colors.spanishGray },
        { skill: 'React', color: colors.vividSkyBlue },
        { skill: 'Python', color: colors.red },
        { skill: 'AWS', color: colors.yellowMunsell }
      ],
      devExperience: '14 yrs',
      devRate: <><span>49</span> / h</>
    }
  ]

  return {
    availableDevs
  }
}
