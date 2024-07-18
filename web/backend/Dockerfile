
# Install dependencies only when needed
FROM node:22-alpine3.20 AS deps
WORKDIR /app/backend
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Build the app with cache dependencies
FROM node:22-alpine3.20 AS builder
WORKDIR /app/backend
COPY --from=deps /app/backend/node_modules ./node_modules
COPY . .
RUN yarn build


# Production image, copy all the files and run next
FROM node:22-alpine3.20 AS runner

# Set working directory
WORKDIR /usr/src/app/backend
COPY package.json yarn.lock ./
RUN yarn --prod
COPY --from=builder /app/backend/dist ./dist

EXPOSE 3001

# Excute backend
CMD [ "node","dist/main" ]