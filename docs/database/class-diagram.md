---
lang: en-US
title: Entity Relationship Diagram
description: ER diagram for the database
---

# Overview

A high-level class diagram of the database and the connections between entities are highlighted below. This is a work in progress and will be updated as the database is developed.

::: tip
The diagrams on this page are interactive. You can zoom and pan the image.
:::

<img src="/mermaid/database-er.svg" data-high-res-src="/mermaid/database-er.svg" alt="ER Diagram" data-zoom-pan />

## Study Metadata

There is a large amount of metadata associated with each study. This metadata has been split into a number of different tables to reduce the amount of data duplication and to make it easier to update the metadata. The API endpoints for these resouces will transform the data into a single JSON object for ease of use.

<img src="/mermaid/study-metadata-er.svg" data-high-res-src="/mermaid/study-metadata-er.svg" alt="ER Diagram" data-zoom-pan />

## Dataset Metadata

Similar to study metadata, there is a large amount of metadata associated with each dataset. This metadata has been split into a number of different tables to reduce the amount of data duplication and to make it easier to update the metadata. The API endpoints for these resouces will transform the data into a single JSON object for ease of use.

<img src="/mermaid/dataset-metadata-er.svg" data-high-res-src="/mermaid/dataset-metadata-er.svg" alt="ER Diagram" data-zoom-pan />
