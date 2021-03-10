import { useState, useEffect, useMemo } from 'react'
import { area, intersect, intersection } from 'rectangles'

function useOverlappingObserver ({
  root: initialRoot,
  threshold = 0,
  isRootRequired = false,
  ignoreHeight = false
}) {
  const [isOverlapping, setIsOverlapping] = useState(false)
  const [target, targetRef] = useState()
  const [root, rootRef] = useState(() => {
    if (initialRoot) return initialRoot
    if (!isRootRequired) return buildViewportElement()
  })
  const result = useMemo(() => {
    const result = [isOverlapping, targetRef, rootRef]

    result.isOverlapping = isOverlapping
    result.targetRef = targetRef
    result.rootRef = rootRef

    return result
  }, [isOverlapping, targetRef, rootRef])

  useEffect(() => {
    const calculateOverlap = () => {
      const targetRect = getRectangleCoordinates(target?.getBoundingClientRect(), { ignoreHeight })
      const rootRect = getRectangleCoordinates(root.getBoundingClientRect(), { ignoreHeight })
      const overlapArea = calculateOverlapArea(targetRect, rootRect)
      const overlapAreaPercentage = overlapArea / area(targetRect)

      setIsOverlapping(
        overlapAreaPercentage >= threshold &&
        overlapAreaPercentage !== 0
      )
    }

    window.addEventListener(
      'scroll',
      calculateOverlap,
      { passive: true }
    )
    calculateOverlap()

    return () => {
      window.removeEventListener(
        'scroll',
        calculateOverlap,
        { passive: true }
      )
    }
  }, [target, root, threshold, ignoreHeight])

  return result
}

function calculateOverlapArea (targetRect, rootRect) {
  if (
    !targetRect ||
    !rootRect ||
    !intersect(targetRect, rootRect)
  ) {
    return 0
  }

  return area(intersection(targetRect, rootRect))
}

function getRectangleCoordinates ({
  x = 0,
  y = 0,
  width = 0,
  height = 0
} = {}, {
  ignoreHeight
}) {
  return {
    x1: x,
    y1: y,
    x2: x + width,
    y2: ignoreHeight ? y + 1 : y + height
  }
}

function buildViewportElement () {
  const rootRect = document.documentElement.getBoundingClientRect()

  return buildRootRectangleElement({
    x: -rootRect.x,
    y: -rootRect.y,
    width: window.innerWidth,
    height: window.innerHeight
  })
}

function buildRootRectangleElement ({ x, y, width, height }) {
  return {
    getBoundingClientRect (targetElement) {
      const targetRect = targetElement?.getBoundingClientRect()

      return {
        x,
        y,
        width: width ?? targetRect?.width,
        height: height ?? targetRect?.height
      }
    }
  }
}

export default useOverlappingObserver
