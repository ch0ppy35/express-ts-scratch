# Build
FROM node:16-alpine3.14 as builder

WORKDIR /build
COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./tsconfig.json
COPY .eslintrc.js ./.eslintrc.js
COPY .prettierrc ./.prettierrc
COPY src ./src

RUN npm run eslint
RUN npm run build
RUN npm ci --production

# Dist
FROM alpine:3 as dist

WORKDIR /app
RUN apk add nodejs --no-cache
COPY --from=builder /build/node_modules /app/node_modules
COPY --from=builder /build/dist /app/dist

CMD ["node", "dist/server.js"]