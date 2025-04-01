FROM node:20

WORKDIR /app/server

COPY package.json ./

RUN rm -rf /app/server/node_modules
RUN npm install

COPY . .

EXPOSE 6969

CMD ["npm", "start"]