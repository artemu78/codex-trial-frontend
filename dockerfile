FROM node:12-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
# Copying source files
COPY . .
EXPOSE 3000/tcp

RUN ["npm", "install"]
RUN ["npm", "run", "build"]
CMD ["yarn", "run", "start"]

