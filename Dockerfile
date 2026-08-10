# syntax=docker/dockerfile:1.7

# Build the static website on the native GitHub runner architecture.
# The output is architecture-independent HTML/CSS/JS.
FROM --platform=$BUILDPLATFORM node:24-bookworm-slim AS build

WORKDIR /workspace

ENV PORT=3000
ENV BASE_PATH=/
ENV NODE_ENV=production

RUN corepack enable

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --dir ./artifacts/cloudnova run build


# Buildx automatically selects amd64 or arm64 nginx for each target image.
FROM nginx:1.29-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Avoid RUN commands in the target architecture image.
COPY --from=build \
     --chown=nginx:nginx \
     --chmod=755 \
     /workspace/artifacts/cloudnova/dist/public/ \
     /usr/share/nginx/html/

EXPOSE 8080

USER nginx

HEALTHCHECK \
  --interval=30s \
  --timeout=3s \
  --start-period=10s \
  --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]