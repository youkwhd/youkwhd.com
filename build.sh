#!/bin/bash

set -e

echo "[INFO ::] Generating web pages..."
# clj spawns a repl for some reason
# redirect stdin to the void
clj -M -m app.core 0>/dev/null -- $@

echo "[INFO ::] Moving out resources..."
cp -r resources/* dist/
cp src/styles/font/* dist/

echo "[INFO ::] Generating css..."
stylus src/styles/core/wrapper.styl --out dist/global.css
