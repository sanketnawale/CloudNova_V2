# syntax=docker/dockerfile:1.7

FROM node:24-alpine AS build

WORKDIR /workspace

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY tsconfig.json tsconfig.base.json ./

COPY lib ./lib
COPY scripts ./scripts
COPY artifacts/cloudnova ./artifacts/cloudnova

RUN pnpm install --frozen-lockfile

RUN pnpm --dir ./artifacts/cloudnova run build

FROM nginx:1.29-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build \
    /workspace/artifacts/cloudnova/dist/public/ \
    /usr/share/nginx/html/

RUN chown -R nginx:nginx /usr/share/nginx/html \
    && chmod -R 755 /usr/share/nginx/html

EXPOSE 8080

USER nginx

HEALTHCHECK \
    --interval=30s \
    --timeout=3s \
    --start-period=10s \
    --retries=3 \
    CMD wget --quiet --tries=1 --spider http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]