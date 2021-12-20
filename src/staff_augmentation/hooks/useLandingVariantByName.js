import useLandingVariants from './useLandingVariants'

function useLandingVariantByName (name, isExperimental = false) {
  const { variants } = useLandingVariants()

  return {
    landing: variants.find(({ pathName, isExperimental: experimental }) => pathName === name && experimental === isExperimental)
  }
}

export default useLandingVariantByName
