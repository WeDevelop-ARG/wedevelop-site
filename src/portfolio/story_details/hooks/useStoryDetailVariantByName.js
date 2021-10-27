import useStoryDetailVariants from './useStoryDetailVariants'

function useStoryDetailVariantByName (name) {
  const { variants } = useStoryDetailVariants()

  return {
    storyDetails: variants.find(({ pathName }) => pathName === name)
  }
}

export default useStoryDetailVariantByName
