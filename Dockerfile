FROM node:12.20.1-alpine
RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app
EXPOSE 3000

CMD ["npm", "run","start"]