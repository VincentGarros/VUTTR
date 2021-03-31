FROM node

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn --prod

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]