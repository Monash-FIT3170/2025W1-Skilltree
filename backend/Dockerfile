FROM node:20

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 6969

CMD ["npm", "start"]