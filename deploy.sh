#!/bin/bash

# move path
cd /home/ubuntu/docker/deploy

# docker image build
docker build -t node-travis-ci-cd ./images/node-travis-ci-cd

# excute deploy.sh
./deploy.sh node-travis-ci-cd