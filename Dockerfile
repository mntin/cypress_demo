FROM cypress/base:14.18.1

RUN mkdir /app
WORKDIR /app

COPY . /app


RUN npm install --save-dev cypress
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run


#FROM cypress/base:14.18.1
#RUN npm install --save-dev cypress
#RUN $(npm bin)/cypress verify
#RUN $(npm bin)/cypress run