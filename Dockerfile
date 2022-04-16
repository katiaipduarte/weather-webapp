FROM node:16-alpine AS builder
COPY . /app
WORKDIR /app
ARG VERSION
RUN npm ci
RUN npm run lint
RUN npm run build

FROM node:16-alpine
COPY --from=builder /app /app
WORKDIR /app
ENV PORT=3000
EXPOSE 3000
CMD [ "npm", "start" ]
