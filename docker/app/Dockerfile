FROM alpine:3.10 as base

# Build and test:
# docker build --rm --no-cache -t "jabd/jab" --target "deploy" -f ".\docker\app\Dockerfile" .
# docker run --rm -it --entrypoint sh jabd/jab
# docker run --rm -v "${PWD}:/tmp" jabd/jab web /tmp/MyApp my.app "My App"

ENV NODE_OPTIONS="--experimental-modules"

RUN apk --progress --purge --no-cache upgrade \
 && apk --no-progress add --no-cache \
    nodejs \
    yarn \
 && apk --progress --purge --no-cache upgrade \
 && rm -vrf /var/cache/apk/* \
 && rm -vrf /tmp/*

FROM base as deploy

RUN apk --no-progress add --no-cache --virtual gitDeps \
    git \
    openssh \
 && yarn global add https://github.com/b01/jab.git \
 && rm -vrf /var/cache/apk/* \
 && apk del gitDeps \
 && rm -vrf /tmp/*

ENTRYPOINT [ "jab" ]
CMD [""]

FROM base as dev

WORKDIR /app

ENTRYPOINT [ "" ]

CMD ["syslogd", "-n"]
