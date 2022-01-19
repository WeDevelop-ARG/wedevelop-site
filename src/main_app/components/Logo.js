import { combineVariants, isVariant } from 'utils/use_variants'
import isologoWhite from 'assets/logo/isologo_white.svg'
import isologoColor from 'assets/logo/isologo_color.svg'
import fullLogoWhite from 'assets/logo/full_logo_white.svg'
import fullLogoColor from 'assets/logo/full_logo_color.svg'
import Image from './Image'

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

  return (
    <Image
      src={logoSrc}
      alt='WeDevelop Logo'
      width={width ?? (isVariant(variant, 'isologo') ? '64' : '225')}
      height={height ?? (isVariant(variant, 'isologo') ? '64' : '51')}
      {...props}
    />
  )
}

export default Logo
