import useVariants, { combineVariants, isVariant } from 'utils/use_variants'
import SVGIcon from 'main_app/components/SVGIcon'

function Logo ({ className, variant, menuOpen }) {
  const variantPaths = {
    white: 'logoWhiteFull',
    color: 'logoBlueFull'
  }

  if (!isVariant(variant, 'white')) {
    variant = combineVariants(variant, 'color')
  }

  const useVariant = useVariants(variantPaths, variant)

  const logoPath = () => {
    if (menuOpen) return variantPaths.white

    return useVariant
  }

  return (
    <SVGIcon name={logoPath()} className={className} />
  )
}

export default Logo
