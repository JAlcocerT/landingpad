# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:20.12.2
#https://hub.docker.com/layers/library/node/20.12.2/images/sha256-740804d1d9a2a05282a7a359446398ec5f233eea431824dd42f7ba452fa5ab98?context=explore

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install Astro globally
#RUN npm install -g astro

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

#If you'd like to set npm run dev as the default command for the container
# Add this line at the end of your Dockerfile
#CMD ["npm", "run", "dev"]