#!/bin/sh

set -e

git submodule init
git submodule update

npm install -g coffee-script
npm install -g express
npm install -g socket.io
