import All from 'assets/landing/all.svg'
import Design from 'assets/landing/design.svg'
import DevTeam from 'assets/landing/dev_team.svg'
import Scale from 'assets/landing/scale.svg'
import Validate from 'assets/landing/validate.svg'
import FilledHexagon from 'assets/landing/filled_hexagon.svg'

function WhatAreYouLookingFor () {
  return (
    <section>
      <h2>What are you looking for?</h2>
      <p>
        We are a Digital Product Development company born in Argentina focused on high-quality and long-term solutions.
      </p>
      <ul>
        <li>
          <button type='button'>
            Validate an idea
            <img src={Validate} alt='' />
          </button>
        </li>
        <li>
          <button type='button'>
            Design / create a product
            <img src={Design} alt='' />
          </button>
        </li>
        <li>
          <button type='button'>
            Partner up with a dev team
            <img src={DevTeam} alt='' />
          </button>
        </li>
        <li>
          <button type='button'>
            Scale / change a product
            <img src={Scale} alt='' />
          </button>
        </li>
        <li>
          <button type='button'>
            Show me all your offerings
            <img src={All} alt='' />
          </button>
        </li>
      </ul>
      <img src={FilledHexagon} alt='' />
    </section>
  )
}

export default WhatAreYouLookingFor
