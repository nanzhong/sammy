FROM node:slim
WORKDIR /sammy
ADD . /sammy
RUN setcap cap_net_bind_service=+ep /usr/local/bin/node
EXPOSE 80
ENTRYPOINT ["node", "index.js"]
