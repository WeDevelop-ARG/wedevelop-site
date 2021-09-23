import useVariants, { combineVariants, isVariant } from 'utils/use_variants'
import SVGIcon from 'main_app/components/SVGIcon'

function Logo ({ menuOpen, variant, mobile, className }) {
  const variantPaths = {
    white: 'logoWhiteFull',
    color: 'logoBlueFull'
  }

  const variantMobilePaths = {
    white: 'onlyLogoWhite',
    color: 'onlyLogoBlue'
  }

  const useVariant = useVariants(variantPaths, variant)
  const useVariantMobile = useVariants(variantMobilePaths, variant)

  if (!isVariant(variant, 'white')) {
    variant = combineVariants(variant, 'color')
  }

  const logoPath = () => {
    if (menuOpen) return variantPaths.white

    return useVariant
  }

  const logoMobilePath = () => {
    if (menuOpen) return variantMobilePaths.color

    return useVariantMobile
  }

  return (
    <>
      {mobile ? <SVGIcon name={logoMobilePath()} className={className} /> : <SVGIcon name={logoPath()} className={className} />}
    </>
  )
}

export default Logo
