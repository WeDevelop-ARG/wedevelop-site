function getMailchimpTags (source) {
  switch (source) {
    case 'staff-augmentation': return ['STAFF_AUGMENTATION']
    case 'web-designers': return ['WEB_DESIGNERS']
    case 'web-developers': return ['WEB_DEVELOPERS']
    case 'hire-developers': return ['HIRE_DEVELOPERS']
    case 'contact': return ['WEB_WEDEV']
    default: return ['CALENDLY_EVENT_UNKNOWN_SOURCE']
  }
}

exports.getMailchimpTags = getMailchimpTags
