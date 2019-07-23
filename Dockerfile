FROM node:10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
# Open port 80 for serving the webpage
EXPOSE 80

# Run when the container launches
CMD [ "npm", "start" ]
