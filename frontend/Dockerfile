# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps


# Copy app source code and build it
COPY . .
RUN npm run build

# Production stage with nginx
FROM nginx:alpine

# Copy the build output to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
