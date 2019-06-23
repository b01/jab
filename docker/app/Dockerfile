FROM node:current-alpine as base

# docker build --rm -t "jabd/jab" --target "deploy" -f ".\docker\app\Dockerfile" .

# BEGIN deploy

FROM base as deploy

COPY ./ /app

WORKDIR /app

ENTRYPOINT [ "node", "--experimental-modules", "src/cli.mjs"]
CMD [""]

# END deploy
# BEGIN dev

FROM base as dev

RUN apk -q --progress --purge --no-cache upgrade \
 && apk --no-progress --purge --no-cache add --upgrade --latest --virtual devDeps \
    curl \
    unzip \
 && apk -q --progress --purge --no-cache upgrade \
 && rm -vrf /var/cache/apk/* \
 && cd /opt \
 && curl -sSL -O https://github.com/kward/shunit2/archive/v2.1.7.zip \
 && unzip v2.1.7.zip \
 && rm -rf v2.1.7.zip

ENTRYPOINT [ "" ]

CMD ["syslogd", "-n"]
