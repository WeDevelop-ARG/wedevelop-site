import ClutchWidget from 'main_app/components/ClutchWidget'
import SVGIcon from 'main_app/components/SVGIcon'

function Header () {
  return (
    <section>
      <div>
        <p>IT staff augmentation</p>
        <h1>
          <div>The extra talent needed</div>
          <div>to Boost <span>Your Projects</span></div>
        </h1>
        <ClutchWidget variant='dark' />
      </div>
      <div>
        <SVGIcon name='staff_augmentation/flying_rocket' />
      </div>
    </section>
  )
}

export default Header
