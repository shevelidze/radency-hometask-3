FROM node:18

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

ENV DATABASE_URL=postgres://postgres:mysecretpassword@postgres:5432/notes

EXPOSE 3000

CMD npm run start:prod

