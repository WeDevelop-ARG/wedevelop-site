variable "project_id_prefix" {
  type        = string
  description = "Prefix for project id. Will be prefixed to the workspace name to form the full project id."
  default     = "wedevelop-site"
}

variable "region" {
  type        = string
  description = "GCP region for resources"
  default     = "us-central1"
}

variable "region_app" {
  type        = string
  description = "GCP region for app engine"
  default     = "us-central"
}

variable "zone" {
  type        = string
  description = "GCP zone for resources"
  default     = "us-central1-a"
}

variable "base_domain_name" {
  type        = string
  description = "Base domain name. Specific environments other than production will be a direct subdomain."
  default     = "wedevelop.me"
}

variable "base_marketing_domain_name" {
  type        = string
  description = "Base domain name for marketing purposes. Specific environments other than production will be a direct subdomain."
  default     = "wedevelop.info"
}

variable "production_environment_name" {
  type        = string
  description = "Environment name used for the production environment"
  default     = "production"
}

locals {
  environment   = terraform.workspace
  is_production = local.environment == var.production_environment_name

  project_id                    = "${var.project_id_prefix}%{if !local.is_production}-${local.environment}%{endif}"
  environment_domain_name       = "%{if !local.is_production}${local.environment}.%{endif}${var.base_domain_name}"
  marketing_environment_domain_name = "%{if !local.is_production}${local.environment}.%{endif}${var.base_marketing_domain_name}"
  default_dns_zone_name         = replace(local.environment_domain_name, ".", "-")
  default_marketing_dns_zone_name = replace(local.marketing_environment_domain_name, ".", "-")
  frontend_cloud_run_service_id = "${local.project_id}"

  production_environment_domain_name = var.base_domain_name
  production_project_id              = "${var.project_id_prefix}"
  production_default_dns_zone_name   = replace(local.production_environment_domain_name, ".", "-")

  github_branch_name = lookup({
    production : "main",
    testing: "develop",
  }, local.environment, "main")
}

locals {
  cf_calendly_base_url = "https://api.calendly.com/"
  cf_mailchimp_server = "us8"
  cf_mailchimp_default_list_id = (local.is_production ? "daf422a384" : "dev")
  cf_mailchimp_career_list_id = (local.is_production ? "34abbed596" : "dev")
  cf_contact_form_destination_email = (local.is_production ? "info@wedevelop.me" : "nahuel@wedevelop.me")
  cf_career_form_destination_emails = (local.is_production ? ["jobs@wedevelop.me"] : ["nahuel@wedevelop.me"])
  cf_hub_spot_landing_deal_pipeline_name = (local.is_production ? "default" : "")
  cf_hub_spot_landing_deal_pipeline_stage = (local.is_production ? "4357554" : "")
  cf_hub_spot_blog_newsletter_id = (local.is_production ? "30923530" : "")
}
