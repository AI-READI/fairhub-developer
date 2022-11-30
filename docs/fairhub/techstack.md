# Development stack of fairhub.io

## Overview

This document describes the development stack of fairhub.io. It is a living document and will be updated as the project evolves.

## Frontend

The frontend is the user interface of the application.

| Tool/framework | Min version | License    | Intended use in our project                                                 |
| -------------- | ----------- | ---------- | --------------------------------------------------------------------------- |
| Vue 3          | 3.2.38      | MIT        | Front-end application to generate single page applications                  |
| Vite           | 3.0.9       | MIT        | Bundle front-end code and libraries                                         |
| TypeScript     | 4.7.4       | Apache-2.0 | Provides typing support to reduce errors during development                 |
| TailwindCSS    | 3.1.8       | MIT        | CSS framework for quick application development                             |
| Pinia          | 2.0.21      | MIT        | Handle state management for users logged into the application               |
| Naive UI       | 2.33.5      | MIT        | Component library that should reduce the development time of UI components. |
| Eslint         | 8.22.0      | MIT        | Enforce coding conventions at development time                              |
| Prettier       | 2.7.1       | MIT        | Enforce coding style guides at development time                             |
| Figma          | -           | -          | Design and simulate user interfaces for fairhub.io                          |
| Iconify        | 4.0         | MIT        | Icon library                                                                |

## Backend

The backend is the server-side of the application. It is responsible for handling requests from the frontend and communicating with the database. Currently communication is done via [REST](https://api.fairhub.io).

| Tool/framework | Min version | License            | Intended use in our project                                             |
| -------------- | ----------- | ------------------ | ----------------------------------------------------------------------- |
| Python         | 3.11        | PSF v2.0           | All backend APIs will be written in Python                              |
| Flask          | 2.1.2       | BSD-3-Clause       | Lightweight WSGI web application framework for Python                   |
| Flask-RESTX    | 0.5.1       | BSD-3-Clause       | An extension for Flask that adds support for quickly building REST APIs |
| Flake8         | 5.0.4       | MIT                | A tool to help enforce coding conventions at development time           |
| Black          | 22.10.0     | MIT                | A tool to help enforce coding style guides at development time          |
| Hoppscotch     | -           | MIT                | A tool to document and potentially test endpoints built for the API     |
| Swagger        | v3          | Apache 2.0 License | Support OpenAPI Specification for API documentation                     |
| PostgreSQL     | -           | -                  | SQL-based database for storing data                                     |
| Azure CosmosDB | -           | -                  | NoSQL based database for storing data                                   |
| Express        | 4.18.2      | MIT                | Javascript framework to build server side APIs                          |

## Testing

Testing is an important part of the development process. It helps to ensure that the code is working as intended and that it is not breaking existing functionality. It also helps to ensure that the code is maintainable and that it is easy to extend. Testing is done in two ways: unit testing and integration testing. Unit testing is done on the frontend and backend. Integration testing is done on the backend. The frontend is tested by simulating user interactions and checking the results. The backend is tested by sending requests to the API and checking the results.

| Tool/framework | Min version | License | Intended use in our project                                                             |
| -------------- | ----------- | ------- | --------------------------------------------------------------------------------------- |
| Cypress        | 10.7.0      | MIT     | End-to-end, Integration and/or unit testing for the browser-based front-end application |
| Vitest         | 0.23.0      | MIT     | A Vite-native unit test framework for Vue applications                                  |
| Pytest         | 3.6.3       | MIT     | Testing framework for Python applications                                               |

## Dependency management

The frontend and backend are both written in different languages. This means that they have different dependency management systems. The frontend uses [npm](https://www.npmjs.com/) and the backend uses [Anaconda](https://pypi.org/project/pip/). Both systems are used to install and manage dependencies.

| Tool/framework                 | Min version                                                                                                                           | License | Intended use in our project                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------- |
| Anaconda/Mini-conda/Mini-force | Any version that supports the prescribed Node and Python versions and you share the associated package.json and environment.yml files | -       | Create environments for our python and Node applications |
| Nodejs                         | 16.14.0                                                                                                                               | -       | Runtime for our commit system and front end application  |
| Yarn                           | 1.22.15                                                                                                                               | BSD-2   | Using yarn over npm for install speeds                   |

## Other

A list of other tools and frameworks that are used in the project.

| Tool/framework | Min version    | License | Intended use in our project                                                                                                                                                                                              |
| -------------- | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Vitepress      | 1.0.0-alpha.27 | MIT     | A framework to generate static websites by writing content. Only basic features are supported but is simpler to setup and modify than Docusaurus. Will be used for dev.fairhub.io                                        |
| Docusaurus     | 2.22.0         | MIT     | Generate static websites by writing content in markdown. Supports versioning, searching and internationalization for different languages. Will most likely be used for long term user documentation like docs.fairhub.io |
| D3.js          | 7.6.1          | ISC     | For visualizing data collection progress, etc.                                                                                                                                                                           |
