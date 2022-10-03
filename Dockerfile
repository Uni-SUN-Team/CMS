FROM node:16.14.2

# ENV HOST=0.0.0.0
# ENV PORT=1337
# ENV APP_KEYS=YcHEM9aKoIlxZmuWDCUa7A==,Pi/76zXKvmXbxJ/JvObgCw==,k9JVtRi3zYEtULajgb/txA==,fr9ByLQ9fxASB3D8BgWJMQ==
# ENV JWT_SECRET=aSiAZgPRmmw7gN7p9WeQxQ==
# ENV API_TOKEN_SALT=RtgRxmiE7vT1XiKH9SQZAA==
# ENV ADMIN_JWT_SECRET=IcRnNpluhp7IXYVqhlCkaA==
# ENV URL=https://cms.unisun.dynu.com
# ENV MEILISEARCH_HOST=https://meilisearch.unisun.dynu.com
# ENV MEILISEARCH_SECRET_KEY=4)&}^8&=G3d*HvxF
# ENV NODE_ENV=production
# ENV SENTRY_DSN=https://1aa1f23714304a68ae8de3ef0beef563@o1238561.ingest.sentry.io/6389420
# ENV SMTP_SERVER=smtp-relay.sendinblue.com
# ENV SMTP_PORT=587
# ENV SMTP_USER=narawichsaphimarn@gmail.com
# ENV SMTP_PASS=DcvLn2RkI5g9b6x1

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --global --force yarn
COPY . .
ADD ./tmp/resources/.env .env
RUN yarn && yarn build

EXPOSE 1337
CMD ["yarn", "start"]