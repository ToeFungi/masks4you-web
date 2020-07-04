FROM node:12.18.2-alpine

WORKDIR /usr/app/src

RUN npm install -g \
    pm2@4.4.0

# pm2 docker smoke test
RUN pm2-docker --version

COPY package*.json ./

RUN npm ci

COPY pm2-production.yml ./
COPY server.js ./server.js
COPY public/ ./public

EXPOSE 3000

CMD [ "pm2-docker", "pm2-production.yml" ]
