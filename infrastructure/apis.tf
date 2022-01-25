resource "google_project_service" "service" {
  for_each = toset([
    "cloudresourcemanager.googleapis.com",
    "cloudbuild.googleapis.com",
    "iamcredentials.googleapis.com",
    "firebase.googleapis.com",
    "dns.googleapis.com"
  ])

  project            = local.project_id
  service            = each.key
  disable_on_destroy = false
}
