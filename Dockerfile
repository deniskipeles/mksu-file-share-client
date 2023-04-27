FROM node:15.8.0-alpine3.10
​
WORKDIR /app
COPY . .
​
RUN npm install express 
​
RUN npm install
CMD node server.js
