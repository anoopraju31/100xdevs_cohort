FROM  node:20-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000

# commands before this runs we starts the container

CMD ["node", "dist/index.js"]