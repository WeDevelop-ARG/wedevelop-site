import { useCallback, useState } from 'react'

import {
  HOME_TOP_ENGINEERS_NEWSLETTER_HUBSPOT_FORM_FORM_ID,
  LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID,
  LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION
} from 'main_app/constants'
import { logAnalyticsEvent } from 'utils/marketing/log_analytics_event'

import HubspotTopEngineersForm from '../HubspotTopEngineersForm'
import LoaderSpinner from '../../../main_app/components/LoaderSpinner'
import Modal from 'main_app/components/Modal'

import classes from './styles.module.scss'

export default function TopEngineersModal ({ isOpen, onRequestClose }) {
  const [isLoading, setIsLoading] = useState(true)

  const handleSubmitFinished = useCallback(async () => {
    await logAnalyticsEvent({
      event: 'top-engineers-form-submit',
      contactType: 'home-form',
      source: 'home'
    })
  }, [])

  const onLoadingStateChange = useCallback(isLoading => {
    setIsLoading(isLoading)
  }, [])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='I want to receive Top IT Talents'
    >
      <LoaderSpinner
        className={classes.loadingContainer}
        visible={isLoading}
      />
      <HubspotTopEngineersForm
        region={LANDING_FREE_QUOTE_HUBSPOT_FORM_REGION}
        portalId={LANDING_FREE_QUOTE_HUBSPOT_FORM_PORTAL_ID}
        formId={HOME_TOP_ENGINEERS_NEWSLETTER_HUBSPOT_FORM_FORM_ID}
        onLoadingStateChange={onLoadingStateChange}
        onSubmit={handleSubmitFinished}
      />
    </Modal>
  )
}
