FROM node:20.5-slim

RUN mkdir src

RUN apt-get update \
    && apt-get install -y

WORKDIR /src

RUN npx nuxi init . --force
RUN yarn install
