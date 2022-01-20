import Image from 'next/image'

import Picture1 from 'assets/home/picture_wall_1.png'
import Picture2 from 'assets/home/picture_wall_2.png'
import Picture3 from 'assets/home/picture_wall_3.png'
import Picture4 from 'assets/home/picture_wall_4.png'

import classes from './styles.module.scss'

function PictureWall () {
  return (
    <div className={classes.pictureWall}>
      <Image src={Picture1} alt='' layout='responsive' position='bottom' />
      <Image src={Picture2} alt='' layout='responsive' position='bottom' />
      <Image src={Picture3} alt='' layout='responsive' position='bottom' />
      <Image src={Picture4} alt='' layout='responsive' position='bottom' />
    </div>
  )
}

export default PictureWall
