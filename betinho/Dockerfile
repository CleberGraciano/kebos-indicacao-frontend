FROM node:16.16-alpine as node

WORKDIR /usr/src/app

# COPY package*.json ./

#RUN npm install -g npm@9.6.7

# RUN npm install --force

COPY . .

# RUN ng build --configuration=production

# Stage 2
FROM nginx:alpine
COPY ./nginx/certs/localhost.crt /etc/nginx/certs/
COPY ./nginx/certs/localhost.key /etc/nginx/certs/
COPY ./nginx/certs/localhost.crt /etc/nginx/certs/
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /usr/src/app/dist/kebos-app /usr/share/nginx/html
