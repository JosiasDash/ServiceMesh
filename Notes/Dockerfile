FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE ${PORT}
CMD [ "node", "src/index.js" ]
