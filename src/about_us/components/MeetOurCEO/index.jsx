import WrappedImage from 'main_app/components/WrappedImage'

import abelProfilePicture from 'assets/about_us/abel.png'
import DotsPattern from 'assets/home/dots_pattern.svg'

import classes from './styles.module.scss'

export default function MeetOurCEO () {
  return (
    <section className={classes.section}>
      <div className={classes.header}>
        <div className={classes.profileImgContainer}>
          <WrappedImage
            src={abelProfilePicture}
            objectFit='cover'
            alt='Photo of Abel Osorio, WeDevelop CEO'
            className={classes.profileImg}
          />
          <div className={classes.filledProfileCircle} aria-hidden='true' />
          <div className={classes.emptyProfileCircle} aria-hidden='true' />
        </div>
        <p className={classes.introTitle}>Leadership</p>
        <h2 className={classes.title}>Meet Our CEO</h2>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.body}>
        <p className={classes.text}>
          <b>Abel Osorio</b> is the <b>founder and Chief Executive Officer of WeDevelop</b>
          . Passionate about the tech industry since a very young age and with 10+ years of
          experience in the field, Abel founded this company based on
          <b> strong beliefs, a thirst for innovation, and impeccable work ethics</b>
          . He envisioned the future of building productive and efficient teams that could
          change the meaning of innovation as we know it.
        </p>
        <br />
        <p className={classes.text}>
          Relentless and resilient,
          <b>
            Abel has set the ground rules and essence of his company, drawn upon adaptability,
            creativity, and insightfulness
          </b>. He works closely with clients helping them achieve their goals by creating and
          scaling unique tech teams.
        </p>
      </div>
      <WrappedImage layout='intrinsic' src={DotsPattern} alt='decorative dots pattern' className={classes.dotsPattern} aria-hidden='true' />
    </section>
  )
}
