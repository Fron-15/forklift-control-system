#!/bin/bash

if [ "$1" != "" ]; then
	PROFILE=$1	
fi
if [ "${PROFILE}" == "" ]; then
	PROFILE=dev
fi

if [ "$2" != "" ]; then
    PORT=$2
fi
if [ "${PORT}" == "" ]; then
    PORT=8103
fi

#assume that npm install is executed before
#npm install --allow-root

#echo "print $PORT"
FINAL_CMD="gulp serve --port=$PORT --no-open --no-notify --release --env=$PROFILE"

echo "cmd: $FINAL_CMD"

mkdir -p dist/qytg
cp -Prv www/qytg/* dist/qytg/

$FINAL_CMD
