import { useMemo } from 'react'
import useStories from './useStories'

export function useSimilarStories ({ amount, storyName }) {
  const { stories } = useStories()
  const similarStories = useMemo(() => {
    return stories.filter(story => story.urlName !== storyName).slice(0, amount)
  }, [stories, amount, storyName])

  return { similarStories }
}
