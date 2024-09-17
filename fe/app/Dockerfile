# Fetching the latest node image on alpine linux
FROM node:22-alpine 

# Setting up the work directory
WORKDIR /react-app

EXPOSE 3000

# Copying all the files in our project
COPY . .

RUN npm install

# Starting our application
CMD ["npm","start"]
