FROM node:current-slim
WORKDIR /usr/src/backend
COPY package.json .
COPY tsconfig.json .
RUN npm install 
COPY . /usr/src/backend
RUN npm run tsc
EXPOSE 5000
CMD ["npm","run","startFull"]
