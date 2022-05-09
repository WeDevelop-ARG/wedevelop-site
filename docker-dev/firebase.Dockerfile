FROM ubuntu:20.04

RUN apt-get update -y

RUN apt-get install -y curl openjdk-11-jre-headless

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && apt-get install -y nodejs

RUN mkdir -p /opt/workspace/storage /opt/workspace/firestore \
  /root/.cache /root/.config /root/.npm

COPY ./docker-dev/firebase/emulators/ /opt/workspace/
COPY ./storage/ /opt/workspace/storage/
COPY ./functions/ /opt/workspace/functions/
COPY ./firestore/ /opt/workspace/firestore/
COPY ./docker-dev/.runtimeconfig.sample.json \
  /opt/workspace/functions/.runtimeconfig.json

RUN npm config set unsafe-perm true
RUN npm install -g firebase-tools
RUN bash -c "cd /opt/workspace/functions && npm install"
RUN bash -c "cd /opt/workspace/storage && npm install"
RUN bash -c "cd /opt/workspace/firestore && npm install"
