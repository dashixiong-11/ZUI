#!/bin/zsh
npm version $1 && \
git push origin master:deploy --follow-tagsh