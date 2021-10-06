import useVariants, { combineVariants, isVariant } from 'utils/use_variants'
import SVGIcon from 'main_app/components/SVGIcon'

function Logo ({ className, variant, menuOpen, mobile }) {
  const variantPaths = {
    white: 'logoWhiteFull',
    color: 'logoBlueFull',
    mobile: 'logo'
  }

  if (!isVariant(variant, 'white')) {
    variant = combineVariants(variant, 'color')
  }

  const useVariant = useVariants(variantPaths, variant)

  const logoPath = () => {
    if (menuOpen) return variantPaths.white
    if (mobile) return variantPaths.mobile

    return useVariant
  }

  return (
    <SVGIcon name={logoPath()} className={className} />
  )
}

export default Logo
