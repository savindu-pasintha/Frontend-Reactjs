FROM node:19-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

# RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
