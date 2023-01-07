---
lang: en-US
title: fairhub.io developer documentation
description: How to use the documentation site
---

# Getting started

## ⚠️ Prerequisites

This project uses [`Yarn`](https://yarnpkg.com/) as package manager.

```sh
npm install --global yarn
```

If you already have a `Anaconda` environment on your machine, you can install the dependencies with:

```sh
conda install -c conda-forge yarn nodejs
```

## Run locally

Clone the project

```sh
https://github.com/AI-READI/dev.fairhub.io.git
```

Go to the project directory

```sh
cd dev.fairhub.io
```

Install dependencies

```sh
yarn install
```

Start the server

```sh
yarn docs:dev
```

## Build locally

Use this step to build a local production version of the site. Use `serve` to preview the local build.

```sh
yarn docs:build
```

## Updating the documentation

Whenever a change in build, release, or development instructions occurs update the documentation. To do this follow the below steps:

- Get the project running locally using the [instructions](#run-locally) above.
- Create a separate branch based off `main`
- Make your changes to the project and commit them to the local repository
- Create a PR to the main branch with [@megasanjay](https://github.com/megasanjay) and/or [@bvhpatel](https://github.com/bvhpatel) as reviewers
- After approval merge the PR into `main`

These docs will be automatically deployed to https://dev.fairhub.io.
