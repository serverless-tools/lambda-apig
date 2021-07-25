#!/bin/bash

echo -e ">>> deploing... \n"
echo ">>> $1"

[ ! "$1" ] && echo "ERRO: Lambda ARN é obrigatório" && exit 666;

aws lambda update-function-code \
    --function-name $1 \
    --zip-file fileb://deploy.zip 

aws lambda update-function-configuration \
    --function-name $1 \
    --timeout 30 \
    --runtime nodejs14.x \
    --handler "dist/index.handler" 

# aws logs put-retention-policy \
#     --log-group-name $2 \
#     --retention-in-days 90
