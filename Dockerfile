FROM node:12.14.0-alpine3.9 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

FROM node:12.14.0-alpine3.9
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/dist .
CMD ["serve", "-p", "80", "-s", "."]
