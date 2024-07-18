# Etapa 1: Instalar dependencias solo cuando sea necesario
FROM --platform=linux/amd64 node:22-alpine3.20 AS deps
WORKDIR /app/frontend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Etapa 2: Construir la aplicación con las dependencias en caché
FROM --platform=linux/amd64 node:22-alpine3.20 AS builder
WORKDIR /app/frontend
COPY --from=deps /app/frontend/node_modules ./node_modules
COPY . .
RUN yarn build

# Etapa 3: Imagen de producción, copiar todos los archivos y ejecutar la aplicación
FROM --platform=linux/amd64 node:22-alpine3.20 AS runner

# Establecer el directorio de trabajo
WORKDIR /usr/src/app/frontend

# Copiar archivos necesarios para la ejecución en producción
COPY . .
RUN yarn install --production --frozen-lockfile

# Copiar los archivos construidos desde el builder
COPY --from=builder /app/frontend/dist ./dist
RUN yarn add -D vite

EXPOSE 3000

# Ejecutar la aplicación en modo preview
CMD ["yarn", "dev", "--host"]