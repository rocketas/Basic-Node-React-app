FROM node:10
# Set the working directory for docker
WORKDIR /usr/src/frontend
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
# copy everything to working this directory 
COPY . /usr/src/frontend
EXPOSE 3500
CMD [ "npm","start" ]

