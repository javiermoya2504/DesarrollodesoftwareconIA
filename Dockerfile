# Para Dokploy: Build Path "/" y Dockerfile "Dockerfile".
# Vive en la raíz (no en slidev/) para que Vercel no lo detecte y publique el sitio estático.
FROM node:24-alpine AS build
WORKDIR /app
COPY slidev/package*.json ./
RUN npm ci
COPY slidev/ .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN printf 'server {\n  listen 80;\n  root /usr/share/nginx/html;\n  location / { try_files $uri $uri/ /index.html; }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
