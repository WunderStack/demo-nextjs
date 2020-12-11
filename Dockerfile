#
# To build this docker container run this in the root directory of repo:
#
# docker build --tag wdpr_demo_nextjs:latest --file frontend/log-viewer/Dockerfile .
#
# To run the docker container:
#
# docker run --rm -p 8000:8000 -it --name wdpr_demo_nextjs wdpr_demo_nextjs:latest
#


FROM mhart/alpine-node:12

WORKDIR /app
COPY . ./
RUN yarn install

RUN yarn build

CMD ["yarn", "start"]

EXPOSE 8000