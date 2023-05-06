FROM node:18.13-alpine

WORKDIR /app

COPY . /app/

RUN npm ci && npm cache clean --force && chmod +x ./