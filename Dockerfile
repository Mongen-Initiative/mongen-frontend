FROM node:12-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

ENTRYPOINT ["npm", "run", "dev"]
