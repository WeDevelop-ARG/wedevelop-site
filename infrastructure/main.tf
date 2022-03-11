terraform {
  backend "gcs" {
    bucket = "wedevelop-site-infrastructure"
    prefix = "terraform/state"
  }

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 3.0"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "~> 3.0"
    }
  }
}

provider "google" {
  project               = local.project_id
  region                = var.region
  zone                  = var.zone
  user_project_override = true
  billing_project       = local.project_id
}

provider "google-beta" {
  project               = local.project_id
  region                = var.region
  zone                  = var.zone
  user_project_override = true
  billing_project       = local.project_id
}

data "google_project" "project" {
  project_id = local.project_id
}
