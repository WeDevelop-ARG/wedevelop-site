import useVariants, { combineVariants, isVariant } from 'utils/use_variants'
import SVGIcon from 'main_app/components/SVGIcon'

function Logo ({ className, logoVariant = 'full', variant }) {
  const variantPaths = {
    white: 'logoWhiteFull',
    color: 'logoBlueFull'
  }

  if (!isVariant(variant, 'white')) {
    variant = combineVariants(variant, 'color')
  }

  const logoPath = useVariants(variantPaths, variant)

  return (
    <SVGIcon name={logoPath} className={className} />
  )
}

export default Logo
