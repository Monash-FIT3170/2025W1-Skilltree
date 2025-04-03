FROM node:20

WORKDIR /app/server

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 6969

CMD ["npm", "start"]