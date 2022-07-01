import React from 'react'
import classNames from 'classnames'

import WrappedImage from 'main_app/components/WrappedImage'
import rightArrow from 'assets/how_does_it_works/arrows/right_arrow_mobile.svg'

const indicatorsStep = (lastStep) =>
  (index) => {
    return (
      <div>
        <div className={classNames('stepsIndicator')}></div>
        {index < lastStep && <WrappedImage className="arrow" src={rightArrow} />}
      </div>
    )
}

export default indicatorsStep