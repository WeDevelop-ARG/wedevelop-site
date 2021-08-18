import Hero from './hero'
import photo from 'assets/services/photo-staff-augmentation.svg'
import icon from 'assets/services/icon-staffe-augmentation.svg'
import background from 'assets/services/background-staff-augmentation.png'

function StaffAugmentation() {
  return (
    <>
      <section>
        <Hero
          icon={icon}
          photo={photo}
          background={background}
          title="Staff Augmentation"
          description="Expand your team with our skilled experts who can scale up your development speed, quality and substantially cut down your costs."
        />
      </section>
    </>
  )
}

export default StaffAugmentation

