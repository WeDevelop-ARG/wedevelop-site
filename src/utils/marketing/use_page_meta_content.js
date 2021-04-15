import { useEffect } from 'react'

function useMetaContent ({ content, ...selectorObject }) {
  const [selectorName] = Object.keys(selectorObject)
  const selectorValue = selectorObject[selectorName]

  useEffect(() => {
    const previousContent = setMetaContent({
      selectorName,
      selectorValue,
      content
    })

    return () => {
      setMetaContent({ selectorName, selectorValue, content: previousContent })
    }
  }, [content, selectorName, selectorValue])
}

function setMetaContent ({ selectorName, selectorValue, content }) {
  const query = `meta[${selectorName}="${selectorValue}"]`
  let meta = document.head.querySelector(query)
  let previousContent

  if (meta) {
    previousContent = meta.content
  }

  if (meta && !content) {
    document.head.removeChild(meta)
  } else if (!meta && content) {
    meta = document.createElement('meta')
    meta.setAttribute(selectorName, selectorValue)
    document.head.appendChild(meta)
  }

  if (meta && content) {
    meta.content = content
  }

  return previousContent
}

export default useMetaContent
