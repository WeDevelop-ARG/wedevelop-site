import Picture1 from 'assets/home/picture_wall_1.png'
import Picture2 from 'assets/home/picture_wall_2.png'
import Picture3 from 'assets/home/picture_wall_3.png'
import Picture4 from 'assets/home/picture_wall_4.png'

import classes from './styles.module.scss'

function PictureWall () {
  return (
    <div className={classes.pictureWall}>
      <img src={Picture1} alt='' />
      <img src={Picture2} alt='' />
      <img src={Picture3} alt='' />
      <img src={Picture4} alt='' />
    </div>
  )
}

export default PictureWall
