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
    testing: "develop",
  }, local.environment, "main")
}

locals {
  cloud_functions_config_values {
    calendly {
      base_url = "https://api.calendly.com/"
    }
    mailchimp {
      server = "us8"
      default_list_id = (is_production ? "daf422a384" : "dev")
      career_list_id = (is_production ? "34abbed596" : "dev")
    }
    contact_form {
      destination_email = (is_production ? "info@wedevelop.me" : "nahuel@wedevelop.me")
    }

    career_form {
      destination_emails = (is_production ? ["jobs@wedevelop.me"] : ["nahuel@wedevelop.me"])
    }
    hub_spot {
      landing_deal_pipeline_name = (is_production ? "default" : "")
      landing_deal_pipeline_stage = (is_production ? "4357554" : "")
      blog_newsletter_id = (is_production ? "30923530" : "")
    }
  }
}
