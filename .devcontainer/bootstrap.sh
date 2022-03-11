#!/usr/bin/env bash
set -euxo pipefail

echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
source /usr/local/share/nvm/nvm.sh --install
