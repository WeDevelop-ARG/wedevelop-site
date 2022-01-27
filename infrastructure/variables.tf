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
  default_dns_zone_name         = replace(local.environment_domain_name, ".", "-")
  frontend_cloud_run_service_id = "${local.project_id}"

  production_environment_domain_name = var.base_domain_name
  production_project_id              = "${var.project_id_prefix}"
  production_default_dns_zone_name   = replace(local.production_environment_domain_name, ".", "-")

  github_branch_name = lookup({
    production : "main",
    testing: "feature/nextjs",
  }, local.environment, "main")
}
