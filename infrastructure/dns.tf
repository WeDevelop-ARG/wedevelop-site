resource "google_dns_managed_zone" "default_dns_zone" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  project     = local.project_id
  visibility  = "public"
  name        = local.default_dns_zone_name
  dns_name    = "${local.environment_domain_name}."
  description = "DNS zone for the ${local.environment} environment"
}

resource "google_dns_record_set" "production_environment_zone_delegation" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  count        = local.is_production ? 0 : 1
  project      = local.production_project_id
  managed_zone = local.production_default_dns_zone_name
  name         = "${local.environment_domain_name}."
  type         = "NS"
  rrdatas      = google_dns_managed_zone.default_dns_zone.name_servers
  ttl          = 60
}

resource "google_dns_record_set" "environment_root_a_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  project      = local.project_id
  managed_zone = google_dns_managed_zone.default_dns_zone.name
  name         = "${local.environment_domain_name}."
  type         = "A"
  rrdatas      = ["199.36.158.100"]
  ttl          = 60
}

resource "google_dns_record_set" "environment_www_a_record" {
  depends_on = [google_project_service.service["dns.googleapis.com"]]
  project      = local.project_id
  managed_zone = google_dns_managed_zone.default_dns_zone.name
  name         = "www.${local.environment_domain_name}."
  type         = "A"
  rrdatas      = ["199.36.158.100"]
  ttl          = 60
}
