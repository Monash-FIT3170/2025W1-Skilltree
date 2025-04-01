FROM node:20

WORKDIR /app

COPY package.json ./

RUN rm -rf /app/node_modules
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]