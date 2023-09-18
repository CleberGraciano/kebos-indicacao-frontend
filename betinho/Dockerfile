FROM node:16.16-alpine as node

WORKDIR /usr/src/app

# COPY package*.json ./

#RUN npm install -g npm@9.6.7

# RUN npm install

COPY . .

# RUN npm run build

# Stage 2
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /usr/src/app/dist/kebos-app /usr/share/nginx/html
