import RaftBackground from 'assets/portfolio/raft-background.png'
import TrainWithBackground from 'assets/portfolio/trainwith-background.png'
import CopaBackground from 'assets/portfolio/copa-background.png'
import BallwizBackground from 'assets/portfolio/ballwiz-background.png'
import LogoBallwiz from 'assets/portfolio/logo-ballwiz.svg'
import LogoRaft from 'assets/portfolio/logo-raft.png'
import LogoTrainWith from 'assets/portfolio/logo-trainwith.png'
import LogoCopa from 'assets/portfolio/logo-copa.svg'

const projectCards = [{
  id: '1',
  projectName: 'Raft',
  coverImageURL: RaftBackground,
  logoURL: LogoRaft,
  logoBackgroundColor: '#FFFFFF',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
},
{
  id: '2',
  projectName: 'TrainWith',
  coverImageURL: TrainWithBackground,
  logoURL: LogoTrainWith,
  logoBackgroundColor: 'linear-gradient(93.58deg, #9194A1 2.39%, #959AA6 96.87%)',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
},
{
  id: '3',
  projectName: 'COPA',
  coverImageURL: CopaBackground,
  logoURL: LogoCopa,
  logoBackgroundColor: '#1F2024',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
},
{
  id: '4',
  projectName: 'Ballwiz',
  coverImageURL: BallwizBackground,
  logoURL: LogoBallwiz,
  logoBackgroundColor: '#000000',
  shortDescription: 'A search engine for ferry booking',
  tags: ['E-commerce', 'Web Responsive', 'Staff Augmentation'],
  description: 'Ferry transportation is a pretty niche industry, and there is no search engine or metada platform for it, either globally or in specific countries, so we had to build much of it on our own.',
  externalWebsiteURL: 'url',
  detailsPagePath: ''
}
]

function useProjectCards () {
  return projectCards
}

export default useProjectCards
