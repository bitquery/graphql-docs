#FROM node:16.19-alpine AS builder
FROM node:18-alpine AS builder

ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false
ENV NODE_OPTIONS=--max_old_space_size=16000 \
    API_KEY='your key'

RUN apk add --no-cache autoconf automake g++ musl-dev gcompat

WORKDIR /app

COPY . .

RUN yarn install && yarn build



FROM nginx:1.24-alpine AS runner

WORKDIR /app

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
