FROM node:current-alpine

LABEL org.opencontainers.image.source=https://github.com/jonas-be/twitch-data-site

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# production environment
CMD ["npm", "run", "start"]
