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
        string description
        string image
        string[] keywords
        date updated_on
        date created_at
        string size
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

     VERSION_PARTICIPANT{
        string version_id PK,FK
        string participant_id PK,FK
    }

    USER }o--o{ STUDY_CONTRIBUTOR : "part of"
    STUDY_CONTRIBUTOR }o--o{ STUDY : contributes
    INVITED_STUDY_CONTRIBUTOR }o--o{ STUDY : "invited to"
    PARTICIPANT }o--|| STUDY : participates
    VERSION }o--o{ VERSION_PARTICIPANT : has
    VERSION_PARTICIPANT }o--o{ PARTICIPANT : "part of"
    STUDY ||--o{ DATASET : publishes
    DATASET ||--o{ VERSION : creates
```

Diagram generated using [Mermaid](https://mermaid-js.github.io/mermaid/#/).
