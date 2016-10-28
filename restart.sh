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

./stop.sh
./start-docker.sh $PROFILE $PORT
