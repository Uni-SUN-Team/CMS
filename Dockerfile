FROM node:16.14.2

ENV HOST=0.0.0.0
ENV PORT=1337
ENV APP_KEYS=YcHEM9aKoIlxZmuWDCUa7A==,Pi/76zXKvmXbxJ/JvObgCw==,k9JVtRi3zYEtULajgb/txA==,fr9ByLQ9fxASB3D8BgWJMQ==
ENV JWT_SECRET=aSiAZgPRmmw7gN7p9WeQxQ==
ENV API_TOKEN_SALT=RtgRxmiE7vT1XiKH9SQZAA==
ENV ADMIN_JWT_SECRET=IcRnNpluhp7IXYVqhlCkaA==
ENV URL=https://cms.unisun.dynu.com
ENV MEILISEARCH_HOST=meilisearch
ENV MEILISEARCH_SECRET_KEY=4)&}^8&=G3d*HvxF

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --global --force yarn
RUN yarn && yarn build
COPY . .

EXPOSE 1337
CMD ["yarn", "start"]