FROM node:18.20-alpine3.19 as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /usr/src/app/dist/kebos-app /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]