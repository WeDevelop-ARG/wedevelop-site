import useStoryDetailVariants from './useStories'

function useStoryByName (name) {
  const { stories } = useStoryDetailVariants()

  return {
    storyDetails: stories.find(({ urlName }) => urlName === name)
  }
}

export default useStoryByName
