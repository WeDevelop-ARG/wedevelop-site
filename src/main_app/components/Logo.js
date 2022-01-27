import { combineVariants, isVariant } from 'utils/use_variants'
import isologoWhite from 'assets/logo/isologo_white.svg'
import isologoColor from 'assets/logo/isologo_color.svg'
import fullLogoWhite from 'assets/logo/full_logo_white.svg'
import fullLogoColor from 'assets/logo/full_logo_color.svg'
import Image from 'main_app/components/Image'

function Logo ({ variant, width, height, ...props }) {
  let logoSrc

  if (!isVariant(variant, 'isologo')) {
    variant = combineVariants('full', variant)
  }

  if (!isVariant(variant, 'white')) {
    variant = combineVariants('color', variant)
  }

  if (isVariant(variant, 'full') && isVariant(variant, 'white')) {
    logoSrc = fullLogoWhite
  } else if (isVariant(variant, 'full') && isVariant(variant, 'color')) {
    logoSrc = fullLogoColor
  } else if (isVariant(variant, 'isologo') && isVariant(variant, 'white')) {
    logoSrc = isologoWhite
  } else if (isVariant(variant, 'isologo') && isVariant(variant, 'color')) {
    logoSrc = isologoColor
  }

  if (width && !height) {
    if (isVariant(variant, 'isologo')) height = width
    else height = width * (51 / 225)
  } else if (height && !width) {
    if (isVariant(variant, 'isologo')) width = height
    else width = height * (225 / 51)
  }

  return (
    <Image
      src={logoSrc}
      alt='WeDevelop Logo'
      layout='fixed'
      width={width ?? (isVariant(variant, 'isologo') ? '64' : '225')}
      height={height ?? (isVariant(variant, 'isologo') ? '64' : '51')}
      {...props}
    />
  )
}

export default Logo
