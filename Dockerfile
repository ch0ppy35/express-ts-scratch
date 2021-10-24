FROM node:16-alpine3.14 as builder

WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY src ./src
COPY tsconfig.json ./tsconfig.json
RUN npm run build
RUN npm ci --production


FROM alpine:3 as dist

WORKDIR /app
RUN apk add nodejs --no-cache
COPY --from=builder /build/node_modules /app/node_modules
COPY --from=builder /build/dist /app/dist

CMD ["node", "dist/index.js"]