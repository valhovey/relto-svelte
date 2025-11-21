#!/usr/bin zsh

npm run build
cp -r dist/assets ../../Git/valhovey.github.io
cp dist/index.html ../../Git/valhovey.github.io
