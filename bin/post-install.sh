#!/bin/sh

set -e

if [ "${NODE_ENV}" = "production" ]; then
    echo 'manually cloning git submodules.'
    grep url .gitmodules | sed 's/.*= //' | while read url; do git clone $url; done

    echo 'moving boilerplates to correct location'
    rm -rf boilerplates
    mv jab-boilerplates boilerplates

    echo 'post install script complete.'
fi