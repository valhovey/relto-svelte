#!/usr/bin zsh

npm run build
cp -r dist/assets ../../Git/kylehovey.github.io
cp dist/index.html ../../Git/kylehovey.github.io
