# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app

# add executable commands from node
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
# COPY package-lock.json ./
RUN npm install

# add app
COPY . .

# Open port 
EXPOSE 3000

# start app
CMD ["npm", "start"]