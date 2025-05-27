# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose backend port
EXPOSE 3001

# Run the app
CMD ["npm", "start"]
