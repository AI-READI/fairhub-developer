---
lang: en-US
title: Entity Relationship Diagram
description: ER diagram for the database
---

# Overview

A high-level class diagram of the database and the connections between entities are highlighted below. This is a work in progress and will be updated as the database is developed.

```mermaid
erDiagram
    STUDY{
        string id PK "UUIDv4"
        string title
        string image
        date updated_on
        date created_at
        string size
        boolean oversight_has_dmc
        string brief_summary
        string detailed_description
        string[] conditions
        string[] keywords
    }

    USER{
        string id PK "UUIDv4"
        string username
        string hash "probably not stored in table"
        string email_address
        string first_name "`Given name` in UI"
        string last_name "`Family name` in UI"
        string institution
        string orcid
        date created_at
        string location "Do we really need this?"
        string timezone "Might not need this either"
    }

    STUDY_CONTRIBUTOR{
        string study_id PK "UUIDv4"
        string user_id PK,FK "USER.id"
        string permission "owner|editor|viewer"
    }

    INVITED_STUDY_CONTRIBUTOR{
        string email_address PK
        string study_id PK,FK "STUDy.id"
        string permission "owner|editor|viewer"
        date invited_on
    }

    PARTICIPANT{
        string id PK "UUIDv4"
        string study_id FK "STUDY.id"
        string first_name "`Given name` in UI"
        string last_name "`Family name` in UI"
        string address
        int age "fields will come from redcap"
        date updated_on
        date created_at
    }

    DATASET{
        string id PK "UUIDv4"
        string study_id FK "STUDY.id"
        string latest_version FK "VERSION.id"
        string title
        string description
        string primary_language
        string[] keywords
    }

    VERSION{
        string id PK "UUIDv4"
        string dataset_id FK "DATASET.id"
        string title
        string description
        boolean published "should be uneditable after publish"
        string doi "identifier part only"
        date updated_on
        date created_at
        date published_on
        string[] keywords
    }

    RELATED_RESOURCE {
        string id PK "UUIDv4"
        string name
        string identifier
        string target "url/doi"
    }

     VERSION_PARTICIPANT{
        string version_id PK,FK
        string participant_id PK,FK
    }

    STUDY_IDENTIFICATION{
        string id PK "UUIDv4"
        string study_id FK "STUDY.id"
        string identifier
        string identifier_type
        string identifier_domain
        string identifier_link
        boolean secondary
    }

    STUDY_STATUS{
        string id PK "UUIDv4"
        string study_id FK "STUDY.id"
        string overall_status
        string why_stopped
        date start_date
        string start_date_type
        date completion_date
        string completion_date_type
    }

    STUDY_SPONSORS_COLLOBORATORS{
        string id PK "UUIDv4"
        string study_id FK "STUDY.id"
        string responsible_party_type
        string responsible_party_investigator_first_name
        string responsible_party_investigator_last_name
        string responsible_party_investigator_title
        string responsible_party_investigator_affiliation
        string lead_sponsor_first_name
        string lead_sponsor_last_name
        string[] collaborator_name
    }

    STUDY_DESIGN{
        string id PK "UUIDv4"
        string study_id FK "STUDY.id"
        string study_type
        string design_allocation
        string design_interventional_model
        string design_intervention_model_description
        string design_primary_purpose
        string design_masking
        string design_masking_description
        string[] design_who_masked_list
        string[] phase_list
        int enrollment_count
        string enrollment_type
        int number_arms
        string[] design_observational_model_list
        string[] design_time_perspective_list
        string bio_spec_retention
        string bio_spec_description
        string target_duration
        int number_groups_cohorts
    }

    STUDY_ARM{
        string id PK "UUIDv4"
        string study_id FK "STUDY.id"
        string label
        string type
        string description
        string intervention_list
    }

    STUDY_INTERVENTION  {
        string id PK "UUIDv4"
        string study_id FK "STUDY.id"
        string type
        string name
        string description
        string[] arm_group_label_list
        string[] other_name_list
    }

    STUDY_ELIGIBILTY{
        string id PK "UUIDv4"
        string study_id FK "STUDY.id"
        string gender
        boolean gender_based
        string gender_description
        string miminum_age
        string maximum_age
        boolean healthy_volunteers
        string[] inclusion_criteria
        string[] exclusion_criteria
        string study_population
        string sampling_method
    }

    STUDY_CONTRIBUTOR }o--o{ STUDY : contributes
    INVITED_STUDY_CONTRIBUTOR }o--o{ STUDY : "invited to"
    STUDY_IDENTIFICATION }o--|| STUDY : "is identified by"
    STUDY_STATUS }o--|| STUDY : "is described by"
    STUDY_SPONSORS_COLLOBORATORS ||--|| STUDY : "sponsors"
    STUDY_DESIGN ||--|| STUDY : "is designed as"
    STUDY_ARM ||--|| STUDY : "is armed as"
    STUDY_INTERVENTION ||--|| STUDY : "is defined as"
    STUDY_ELIGIBILTY ||--|| STUDY : "is eligible"

    STUDY ||--o{ DATASET : publishes

    DATASET ||--o{ VERSION : creates

    USER }o--o{ STUDY_CONTRIBUTOR : "part of"
    PARTICIPANT }o--|| STUDY : participates
    VERSION }o--o{ VERSION_PARTICIPANT : has
    VERSION_PARTICIPANT }o--o{ PARTICIPANT : "part of"
```

Diagram generated using [Mermaid](https://mermaid-js.github.io/mermaid/#/).
