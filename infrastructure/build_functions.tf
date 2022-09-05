resource "google_cloudbuild_trigger" "deploy_functions_from_github" {
  name        = "github-functions"
  description = "When the \"${local.github_branch_name}\" branch changes on GitHub, the cloud functions are built and deployed Firebase Functions"
  project     = local.project_id
  filename    = "infrastructure/functions/cloudbuild.yaml"
  ignored_files  = []
  included_files  = ["functions/**","infrastructure/functions"]
  tags = []
  depends_on = [
    google_project_iam_member.cloudbuild["roles/iam.serviceAccountUser"],
    google_project_iam_member.cloudbuild["roles/cloudbuild.builds.builder"],
    google_project_iam_member.cloudbuild["roles/serviceusage.apiKeysAdmin"],
    google_project_service.service["cloudbuild.googleapis.com"],
    google_project_service.service["firebase.googleapis.com"],
    google_project_service.service["cloudfunctions.googleapis.com"],
    google_secret_manager_secret.cloud_functions_secrets
  ]

  github {
    owner = "WeDevelop-ARG"
    name  = "wedevelop-site"

    push {
      branch = "^${local.github_branch_name}$"
    }
  }

  substitutions = {
    _ENVIRONMENT = local.environment
    _LOGS_BUCKET = google_storage_bucket.build_logs.url
    _CF_CALENDLY_BASE_URL = local.cf_calendly_base_url
    _CF_MAILCHIMP_SERVER = local.cf_mailchimp_server
    _CF_MAILCHIMP_DEFAULT_LIST_ID = local.cf_mailchimp_default_list_id
    _CF_MAILCHIMP_CAREER_LIST_ID = local.cf_mailchimp_career_list_id
    _CF_CONTACT_FORM_DESTINATION_EMAIL = local.cf_contact_form_destination_email
    _CF_CAREER_FORM_DESTINATION_EMAILS = element(local.cf_career_form_destination_emails, 0)
    _CF_HUB_SPOT_LANDING_DEAL_PIPELINE_NAME = local.cf_hub_spot_landing_deal_pipeline_name
    _CF_HUB_SPOT_LANDING_DEAL_PIPELINE_STAGE = local.cf_hub_spot_landing_deal_pipeline_stage
    _CF_HUB_SPOT_BLOG_NEWSLETTER_ID = local.cf_hub_spot_blog_newsletter_id
  }
}
