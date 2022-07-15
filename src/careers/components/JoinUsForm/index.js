import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import {
  LANDING_CAREERS_HUBSPOT_FORM_FORM_ID,
  LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID,
  LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION,
} from 'main_app/constants'
import WrappedImage from 'main_app/components/WrappedImage'
import LoaderSpinner from 'main_app/components/LoaderSpinner'
import HubspotFreeQuoteForm from 'staff_augmentation/components/HubspotFreeQuoteForm'
import DotsPattern from 'assets/about_us/dots_pattern.svg'
import HalfCircle from 'assets/home/services/half_circle.svg'

import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import classes from './styles.module.scss'

function JoinUsForm() {
  const [isLoading, setIsLoading] = useState(true)
  const { push } = useRouter()

  const onSuccess = useCallback(() => {
    const redirectUrl = '/success/confirm'
    push(redirectUrl)
  }, [push])

  const handleSubmitFinished = useCallback(() => {
    logAnalyticsEvent({
      event: 'join-us-form-submit',
      contactType: 'careers-form',
      source: 'careers'
    })
    onSuccess()
  }, [onSuccess])

  const onLoadingStateChange = useCallback(isLoading => {
    setIsLoading(isLoading)
  }, [])

  return (
    <section className={classes.joinUsSection} >
      <p className={classes.subheadingText}>Join Us</p>
      <h2 className={classes.titleText}>Let’s grow together</h2>
      <hr className={classes.horizontalBar} />
      <div className={classes.careerForm}>
        <LoaderSpinner
          className={classes.loadingContainer}
          visible={isLoading}
        />
        <HubspotFreeQuoteForm
          region={LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION}
          portalId={LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID}
          formId={LANDING_CAREERS_HUBSPOT_FORM_FORM_ID}
          onLoadingStateChange={onLoadingStateChange}
          onSubmit={handleSubmitFinished}
        />
      </div>
      <div className={classes.filledCircle} aria-hidden='true' />
      <div className={classes.emptyCircle} aria-hidden='true' />
      <div className={classes.smallBlurCircle} aria-hidden='true' />
      <WrappedImage src={DotsPattern} layout='intrinsic' alt='' className={classes.topLeftDotsPattern} aria-hidden='true' />
      <WrappedImage src={HalfCircle} layout='intrinsic' className={classes.halfCircle} />
      <div className={classes.leftSmallBlurCircle} />
      <div className={classes.leftFilledCircle} />
      <div className={classes.leftEmptyCircle} />
      <div className={classes.leftSmallCircle} />
    </section >
  )
}

export default JoinUsForm
