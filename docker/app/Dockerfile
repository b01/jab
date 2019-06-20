FROM node:current-alpine

RUN apk -q --progress --purge --no-cache upgrade \
 && apk --no-progress --purge --no-cache add --upgrade --latest \
    curl \
    unzip \
 && apk -q --progress --purge --no-cache upgrade \
 && rm -vrf /var/cache/apk/* \
 && cd /opt \
 && curl -sSL -O https://github.com/kward/shunit2/archive/v2.1.7.zip \
 && unzip v2.1.7.zip \
 && rm -rf v2.1.7.zip

ENV TERM=bash

ENTRYPOINT [ "" ]

CMD ["syslogd", "-n"]
