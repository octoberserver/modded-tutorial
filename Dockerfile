# syntax=docker/dockerfile:1

# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts AS base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

# Stage 2b: Production build mode.
FROM base AS prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Copy over the source code.
COPY . /opt/docusaurus/
## Install dependencies with `--immutable` to ensure reproducibility.
RUN npm ci
## Build the static site.
RUN npm run build

# Stage 3b: Serve with Caddy.
FROM joseluisq/static-web-server AS sws
WORKDIR /var/docusaurus
## Copy the Docusaurus build output.
COPY --from=prod /opt/docusaurus/build /var/docusaurus/public
