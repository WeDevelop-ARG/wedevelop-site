import { shuffle } from 'lodash'

import RachelAram from 'assets/about_us/testimonials/rachel_aram.jpg'
import FilipElez from 'assets/about_us/testimonials/filip_elez.jpg'
import HugoTroche from 'assets/about_us/testimonials/hugo_troche.jpg'
import DarrenLiu from 'assets/about_us/testimonials/darren_liu.jpg'

const reviews = [
  {
    profileImageURL: RachelAram,
    name: 'Rachel Aram',
    quote: 'They\'re a well-round team, which is conducive to troubleshooting [and] having difficult conversations.',
    position: 'CEO',
    company: 'TrainWith'
  },
  {
    profileImageURL: FilipElez,
    name: 'Filip Elez',
    quote: 'WeDevelop was resourceful, unafraid of problems and blockers, creative, professional, and fast.',
    position: 'CEO',
    company: 'RAFT Croatia'
  },
  {
    profileImageURL: HugoTroche,
    name: 'Hugo Troche',
    quote: 'The project cost about half of what it would have had we hired local engineers.',
    position: 'CTO',
    company: 'Moneda Lending'
  },
  {
    profileImageURL: DarrenLiu,
    name: 'Darren Liu',
    quote: 'They\'re willing to engage with a problem to figure it out rather than waiting to be told what to do.',
    position: 'CEO',
    company: 'Betzar'
  }
]

function useReviews () {
  return {
    reviews: shuffle(reviews)
  }
}

export default useReviews
