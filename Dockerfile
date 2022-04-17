FROM node:16.14.2

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install && npm run build
COPY . .

EXPOSE 1337
CMD ["npm", "start"]