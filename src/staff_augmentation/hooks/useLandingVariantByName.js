import useLandingVariants from './useLandingVariants'

function useLandingVariantByName (name) {
  const { variants } = useLandingVariants()

  return {
    landing: variants.find(({ pathName }) => pathName === name)
  }
}

export default useLandingVariantByName
