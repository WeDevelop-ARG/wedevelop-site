resource "google_dns_managed_zone" "default_dns_zone" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 0 : 1
  project     = local.project_id
  visibility  = "public"
  name        = local.default_dns_zone_name
  dns_name    = "${local.environment_domain_name}."
  description = "DNS zone for the ${local.environment} environment"
}

resource "google_dns_record_set" "environment_root_a_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 0 : 1
  project      = local.project_id
  managed_zone = google_dns_managed_zone.default_dns_zone[0].name
  name         = "${local.environment_domain_name}."
  type         = "A"
  rrdatas      = ["199.36.158.100"]
  ttl          = 60
}

resource "google_dns_record_set" "environment_www_a_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 0 : 1
  project      = local.project_id
  managed_zone = google_dns_managed_zone.default_dns_zone[0].name
  name         = "www.${local.environment_domain_name}."
  type         = "A"
  rrdatas      = ["199.36.158.100"]
  ttl          = 60
}

resource "google_dns_managed_zone" "marketing_dns_zone" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 1 : 0
  project     = local.project_id
  visibility  = "public"
  name        = local.default_marketing_dns_zone_name
  dns_name    = "${local.marketing_environment_domain_name}."
  description = "DNS zone for the ${local.environment} marketing environment"
}

resource "google_dns_record_set" "marketing_root_a_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 1 : 0
  project      = local.project_id
  managed_zone = google_dns_managed_zone.marketing_dns_zone[0].name
  name         = "${local.marketing_environment_domain_name}."
  type         = "A"
  rrdatas      = ["199.36.158.100"]
  ttl          = 60
}

resource "google_dns_record_set" "marketing_www_a_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 1 : 0
  project      = local.project_id
  managed_zone = google_dns_managed_zone.marketing_dns_zone[0].name
  name         = "www.${local.marketing_environment_domain_name}."
  type         = "A"
  rrdatas      = ["199.36.158.100"]
  ttl          = 60
}

resource "google_dns_record_set" "marketing_root_txt_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 1 : 0
  project      = local.project_id
  managed_zone = google_dns_managed_zone.marketing_dns_zone[0].name
  name         = "${local.marketing_environment_domain_name}."
  type         = "TXT"
  rrdatas      = [
    "\"google-site-verification=1uJPL1kmsxQWy8595QerJz6K4ly3lCSEjRUhkYzEk0Y\"",
    "\"v=spf1 include:_spf.google.com include:20780470.spf05.hubspotemail.net ~all\""
  ]
  ttl          = 60
}

resource "google_dns_record_set" "marketing_google_dkim_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 1 : 0
  project      = local.project_id
  managed_zone = google_dns_managed_zone.marketing_dns_zone[0].name
  name         = "google._domainkey.${local.marketing_environment_domain_name}."
  type         = "TXT"
  rrdatas      = [
    "\"v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyjLnmTEPAbOBP/W8rUDrGxjhfp8Og6VDLYHaP1vZuk41wMjLWfdOR4PXCXBFG9w4WNtkRxGIiARUIDdaGHf8R494fjRc0yxLY0yQH3x9VI7ZZlj2w/0oLfoNZQ25TRJV1/dw9Yc8yd1S7PqkXhRXvcnPrdk1Fw4gjjuY+YJmdA35KdRT7FJ5SURcKxCRUZWQ3\" \"zdjsdiUb0XkaJyASBpImEaY3NuM/6l2fxu9pm7PsWrZd5rNayXJ6Om6wu2728emEOi/lZGNfnLfFz00U2tW7uGTUvevjRtLtTRMrFKa+B99CRGHruIIgKJHAD5lOaHrCEMAinAhLv/1RGZKDgRC9wIDAQAB\""
  ]
  ttl          = 60
}

resource "google_dns_record_set" "marketing_hubspot_dkim_cname_record_1" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 1 : 0
  project      = local.project_id
  managed_zone = google_dns_managed_zone.marketing_dns_zone[0].name
  name         = "hs1-20780470._domainkey.${local.marketing_environment_domain_name}."
  type         = "CNAME"
  rrdatas      = [
    "wedevelop-info.hs20a.dkim.hubspotemail.net."
  ]
  ttl          = 60
}

resource "google_dns_record_set" "marketing_hubspot_dkim_cname_record_2" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 1 : 0
  project      = local.project_id
  managed_zone = google_dns_managed_zone.marketing_dns_zone[0].name
  name         = "hs2-20780470._domainkey.${local.marketing_environment_domain_name}."
  type         = "CNAME"
  rrdatas      = [
    "wedevelop-info.hs20b.dkim.hubspotemail.net."
  ]
  ttl          = 60
}

resource "google_dns_record_set" "marketing_dmarc_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 1 : 0
  project      = local.project_id
  managed_zone = google_dns_managed_zone.marketing_dns_zone[0].name
  name         = "_dmarc.${local.marketing_environment_domain_name}."
  type         = "TXT"
  rrdatas      = [
    "\"v=DMARC1; p=none; rua=mailto:info@wedevelop.com; pct=100; adkim=s; aspf=s\""
  ]
  ttl          = 60
}

resource "google_dns_record_set" "marketing_root_mx_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count = local.is_production ? 1 : 0
  project      = local.project_id
  managed_zone = google_dns_managed_zone.marketing_dns_zone[0].name
  name         = "${local.marketing_environment_domain_name}."
  type         = "MX"
  rrdatas      = [
    "1 ASPMX.L.GOOGLE.COM.",
    "5 ALT1.ASPMX.L.GOOGLE.COM.",
    "5 ALT2.ASPMX.L.GOOGLE.COM.",
    "10 ALT3.ASPMX.L.GOOGLE.COM.",
    "10 ALT4.ASPMX.L.GOOGLE.COM."
  ]
  ttl          = 60
}
