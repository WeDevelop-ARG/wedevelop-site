import sadFaceEmoji from 'assets/staff_augmentation/sad_face_emoji.png'
import normalProcess from 'assets/staff_augmentation/normal_process.png'
import rocketEmoji from 'assets/staff_augmentation/rocket_emoji.png'
import withWedevelop from 'assets/staff_augmentation/with_wedevelop.png'

function OurServices () {
  return (
    <section>
      <div>
        <p>Our services</p>
        <h2>
          <div>Hire your next remote</div>
          <div>talent efficiently</div>
        </h2>
      </div>
      <div>
        <figure>
          <figcaption>Normal process <span><img src={sadFaceEmoji} alt='' /></span></figcaption>
          <img src={normalProcess} alt='' />
        </figure>
        <figure>
          <figcaption>With WeDevelop <span><img src={rocketEmoji} alt='' /></span></figcaption>
          <img src={withWedevelop} alt='' />
        </figure>
      </div>
    </section>
  )
}

export default OurServices
