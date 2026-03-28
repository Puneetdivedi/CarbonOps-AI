# Stage 1: Build the CarbonOps React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./
# Industry standard fallback avoiding package-lock.json synchronization bugs in CI layers
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve the application using NGINX
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Custom NGINX config to handle React Router (SPA Fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
