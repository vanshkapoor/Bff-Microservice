FROM node

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003


CMD ["node", "index.js"]