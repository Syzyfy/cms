FROM node:18.19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 1337
EXPOSE 1337

# Build the application
RUN npm run build

# Set the default command to run the application
CMD ["npm", "start"]