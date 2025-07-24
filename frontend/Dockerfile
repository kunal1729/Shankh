# frontend/Dockerfile

FROM node:18-alpine

WORKDIR /app

# Copy dependency files first and install
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy full source
COPY . .

# ✅ Set env var before build so Vite can use it
# Make sure .env.production is copied BEFORE build
COPY .env.production ./
RUN npm run build



# Serve dist/ folder
RUN npm install -g serve
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
