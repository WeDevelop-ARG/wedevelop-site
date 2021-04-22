function getMailchimpTags ({
  tracking: { utm_campaign: source }
}) {
  switch (source) {
    case 'staff-augmentation': return ['LANDING_STAFF_AUG']
    case 'contact': return ['WEB_WEDEV']
    default: return ['CALENDLY_EVENT_UNKNOWN_SOURCE']
  }
}

exports.getMailchimpTags = getMailchimpTags
