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
    subtitle: 'A smart contract-powered loan platform',
    tags: ['Marketplace', 'BlockChain'],
    description:
      'In a world of constant change, financial institutions have to iterate their business models and adopt new technologies. One of the most impactful technologies is the blockchain. The blockchain brought new possibilities to the fintech space, such as cryptocurrencies and Smart Contracts. That’s where Moneda Financial’s owners saw an opportunity.',
    websiteURL: '',
    imageURL: MonedaLending
  },
  challenge: {
    title: 'The Challenge',
    content: (
      <>
        <p>
          Our challenge was to create a platform based on Smart Contracts, allowing people to
          bet on the market price at which an IPO would end. The user who selects the closet
          price wins.
        </p>
        <p>
          We needed to test this idea with a minimal viable product ahead of future development.
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
          We built a web application based on Node.js and React, allowing users to execute
          these bets. A Smart Contract represents each bet with all the necessary information
          and logic for the transaction.
        </p>
        <p>
          Once the IPO’s final price is determined, the Smart Contract is enacted according
          to the algorithm, and the reward is delivered in the form of a new crypto — Moneda Coins.
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
  ],
  reviewedOnClutch: true
}

export default monedaDetails
