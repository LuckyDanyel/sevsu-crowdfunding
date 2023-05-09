FROM node:18.13-alpine3.17 as build
RUN apk update && apk upgrade
USER root
WORKDIR /app
COPY . /app
RUN npm ci && npm run build
FROM node:18.13-alpine3.17
USER root
WORKDIR /app
COPY --from=build /app/.output ./
ENV NODE_ENV=production