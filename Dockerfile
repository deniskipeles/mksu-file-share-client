FROM node:15.8.0-alpine3.10
​
WORKDIR /app
ADD server.js package.json ./
​
RUN npm install
​
RUN npm install
CMD node server.js
