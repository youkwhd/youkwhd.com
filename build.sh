#!/bin/bash

set -e

clj -M -m app.core
cp -r resources/* dist/
cp src/styles/font/* dist/
stylus src/styles/core/wrapper.styl --out dist/global.css
