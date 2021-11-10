import useStoryDetailVariants from './useStoryDetailVariants'

function useStoryDetailVariantByName (name) {
  const { variants } = useStoryDetailVariants()

  return {
    storyDetails: variants.find(({ urlName }) => urlName === name)
  }
}

export default useStoryDetailVariantByName
