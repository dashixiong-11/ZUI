#!/bin/env bash

yarn doc
cd doc
git add .
git commit -m "update"
git push
cd ..
