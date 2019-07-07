FROM alpine:3.10 as base

# Build and test:
# docker build --rm --no-cache -t "jabd/jab" --target "deploy" -f ".\docker\app\Dockerfile" .
# docker run --rm -it -v "${PWD}:/tmp" jabd/jab web /tmp/test1 test "Test App"

ENV NODE_OPTIONS="--experimental-modules"

WORKDIR /app

RUN apk --progress --purge --no-cache upgrade \
 && apk --no-progress add --no-cache \
    nodejs \
    npm \
 && apk --progress --purge --no-cache upgrade \
 && rm -vrf /var/cache/apk/*

FROM base as deploy

RUN apk --no-progress add --no-cache --virtual gitDeps \
    git \
    openssh \
 && npm install --global https://github.com/b01/jab.git \
 && rm -vrf /var/cache/apk/* \
 && apk del gitDeps

ENTRYPOINT [ "jab" ]
CMD [""]

FROM base as dev

ENTRYPOINT [ "" ]

CMD ["syslogd", "-n"]
