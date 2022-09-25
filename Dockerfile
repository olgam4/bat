ARG DENO_VERSION=1.25.4
ARG NODE_VERSION=18

FROM denoland/deno:bin-$DENO_VERSION as deno

FROM node:$NODE_VERSION-alpine as build-stage

EXPOSE 3000

WORKDIR /app
RUN corepack enable

COPY .npmrc package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM node:$NODE_VERSION-alpine as runtime-stage

RUN corepack enable
WORKDIR /app

COPY --from=build-stage /app /app
COPY --from=deno /deno /usr/local/bin/deno

ENTRYPOINT [ "pnpm", "start" ]
