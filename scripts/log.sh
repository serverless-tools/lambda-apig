#!/bin/bash

echo -e "Log-group $1 \n"
aws logs tail $1 --follow