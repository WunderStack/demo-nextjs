#
# To build this docker container run this in the root directory of repo:
#
# docker build --build-arg NPM_AUTH_TOKEN_FONTAWESOME="${NPM_AUTH_TOKEN_FONTAWESOME}" --tag wdpr_log_viewer:latest --file frontend/log-viewer/Dockerfile .
#
# To run the docker container:
#
# docker run --rm -p 5002:5002 -it --name wdpr_log_viewer wdpr_log_viewer:latest
#


FROM mhart/alpine-node:12

WORKDIR /app
COPY . ./
RUN yarn install

RUN yarn build

CMD ["yarn", "start"]

EXPOSE 8000