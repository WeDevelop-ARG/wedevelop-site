export function logAnalyticsEvent ({
  event,
  ...eventParams
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
      ...eventParams,
      eventCallback: resolvePromise
    })
    setTimeout(resolvePromise, timeoutMS)
  })
}
