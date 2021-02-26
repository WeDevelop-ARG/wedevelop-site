import SVGIcon from 'main_app/components/SVGIcon'

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
            <SVGIcon name='offerings/validate' />
          </button>
        </li>
        <li>
          <button type='button'>
            Design / create a product
            <SVGIcon name='offerings/design' />
          </button>
        </li>
        <li>
          <button type='button'>
            Partner up with a dev team
            <SVGIcon name='offerings/dev_team' />
          </button>
        </li>
        <li>
          <button type='button'>
            Scale / change a product
            <SVGIcon name='offerings/scale' />
          </button>
        </li>
        <li>
          <button type='button'>
            Show me all your offerings
            <SVGIcon name='offerings/all' />
          </button>
        </li>
      </ul>
      <SVGIcon name='landing/filled_hexagon' />
    </section>
  )
}

export default WhatAreYouLookingFor
