import MonedaMobileHeader from 'assets/portfolio/moneda/mobile_header_background.png'
import MonedaHeader from 'assets/portfolio/moneda/header_background.png'
import MonedaLogo from 'assets/portfolio/moneda/moneda_logo.png'
import MonedaLending from 'assets/portfolio/moneda/moneda_lending.png'
import MonedaOverview from 'assets/portfolio/moneda/moneda_overview.png'
import TestimonialsImage from 'assets/portfolio/moneda/testimonials_default_image.png'
import MonedaResumeBackground from 'assets/portfolio/moneda/resume_background.png'
import SmartContracts from 'assets/portfolio/tech_stack/smartcontracts.svg'
import Solidity from 'assets/portfolio/tech_stack/solidity.svg'
import Node from 'assets/portfolio/tech_stack/node.svg'
import React from 'assets/portfolio/tech_stack/react.svg'

const monedaDetails = {
  urlName: 'moneda',
  metadata: {
    title: 'Story Details',
    description: 'Story Details for MONEDA'
  },
  resume: {
    headerImageURL: MonedaResumeBackground
  },
  header: {
    backgroundURL: MonedaHeader,
    mobileBackgroundURL: MonedaMobileHeader,
    logoURL: MonedaLogo,
    logoBackground: '#40CC8C',
    heading: 'Success Story',
    title: 'Moneda',
    subtitle: 'A Smart Contract-powered loan platform',
    tags: ['Marketplace', 'BlockChain'],
    description:
      'In a world of constant change, financial institutions had to iterate their business models and adopt new technologies. One of the most impactful ones is Blockchain. Blockchain brought new possibilities such as Cryptocurrencies and Smart Contracts. That’s where Moneda Financial’s owners saw an opportunity.',
    websiteURL: '',
    imageURL: MonedaLending
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          To create a platform based on Smart Contracts that allows people to
          bet on the market price in which an IPO would end the release date.
          Whoever gets closer to its price, wins.
        </p>
        <p>
          The challenge is to test this idea with a minimal viable product and
          see how the idea goes.
        </p>
      </>
    )
  },
  testimonials: [
    {
      profileImageURL: TestimonialsImage,
      name: '',
      quote:
        'The project cost about half of what it would have had we hired local engineers.',
      position: 'CTO',
      company: 'Moneda Lending'
    }
  ],
  solution: {
    title: 'The Solution',
    content: (
      <>
        <p>
          A web-based application, built on Node.js and React, that allows users
          to do these bets. Each bet is represented by a Smart Contract with all
          the necessary information and logic for the transaction.
        </p>
        <p>
          Once the IPO’s final price is determined, the Smart Contract would run
          its algorithm and send the reward, in a new crypto (Moneda Coins), to
          the winner.
        </p>
      </>
    ),
    imageURL: MonedaOverview
  },
  techStackContent: [],
  techStackIcons: [
    {
      id: '1',
      name: 'Smart Contracts',
      photo: SmartContracts
    },
    {
      id: '2',
      name: 'Solidity',
      photo: Solidity
    },
    {
      id: '3',
      name: 'Node.js',
      photo: Node
    },
    {
      id: '4',
      name: 'React',
      photo: React
    }
  ]
}

export default monedaDetails
