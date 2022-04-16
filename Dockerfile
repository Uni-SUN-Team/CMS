FROM node:16.14.2

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@8.7.0
RUN npm install && npm run build
COPY . .

ENV HOST=0.0.0.0
ENV NODE_ENV=production
ENV DATABASE_NAME=unisuncmsdevdb
ENV DATABASE_USER=urquhmotrdhwqg
ENV DATABASE_PASSWORD=efad4bb2169e67ddaa17c21aba5c76efc6a9daa6a06310949eba9a006bf258da
ENV INSTANCE_CONNECTION_NAME=unisun-345117:asia-southeast1:unisun
ENV BUCKET_NAME=unisun-345117.appspot.com
ENV HOST_DB=45.91.135.224

EXPOSE 1337
CMD ["npm", "run", "start"]