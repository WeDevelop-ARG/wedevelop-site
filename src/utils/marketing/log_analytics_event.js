export function logAnalyticsEvent ({
  event,
  eventAction,
  eventValue,
  eventLabel,
  ...otherParams
} = {}, timeoutMS = 1500) {
  return new Promise((resolve, reject) => {
    let resolved = false
    const resolvePromise = () => {
      if (resolved) return undefined

      resolved = true
      resolve()
    }

    window.dataLayer?.push({
      event,
      eventAction,
      eventValue,
      eventLabel,
      ...otherParams,
      eventCallback: resolvePromise
    })
    setTimeout(resolvePromise, timeoutMS)
  })
}
