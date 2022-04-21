FROM node:16.14.2

ENV HOST=cms.unisun.dynu.com
ENV PORT=443
ENV APP_KEYS=mpmpSdlFAmcMTfbtyYnUCg==,naU+JMz/2FULI7k8P1f/SA==,1mZ6KKga+yhNleW1SANGzA==,Q8nkNwAXxEpAB5EKdgjvZQ==
ENV JWT_SECRET=600cb65c-8acf-4871-ba80-222813d41c30
ENV API_TOKEN_SALT=32122e5926bd1116956656331a708e8b

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --global --force yarn
RUN yarn && yarn build
COPY . .

EXPOSE 1337
CMD ["yarn", "start"]