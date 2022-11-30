---
lang: en-US
title: Fairdataihub developer documentation
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
