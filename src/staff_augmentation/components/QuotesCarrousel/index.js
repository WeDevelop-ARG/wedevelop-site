import SVGIcon from 'main_app/components/SVGIcon'

function QuotesCarrousel () {
  return (
    <section>
      <div>
        <SVGIcon name='staff_augmentation/quotation_mark' />
      </div>
      <div>
        <blockquote>
          I was impressed by how they could take my description
          of the skills I needed and find a candidate to match them.
        </blockquote>
        <p>DARRELL YOUNG, <span>CTO - NONSTOP WELLNESS</span></p>
      </div>
    </section>
  )
}

export default QuotesCarrousel
