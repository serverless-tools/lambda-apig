#!/bin/bash

echo ">>> zipando ..."

[ ! -d "./dist" ] && echo "Directory ./dist DOES NOT exists." && exit 666;

zip -qr deploy.zip dist

# zip -qr deploy.zip . --exclude \
#     "*deploy.zip" \
#     ".git*" \
#     "*node_modules/.bin*" \
#     "*node_modules/typescript*" \
#     "*node_modules/ts-node*" \
#     "*node_modules/@types*" \
#     "*node_modules/mocha*" \
#     "*node_modules/esbuild*" \
#     "*node_modules/source-map-support*" \
#     "*node_modules/aws-sdk*"
    