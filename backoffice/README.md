# To deploy the project
you need to install parceljs
```shell
npm install -g parcel-bundler
```
now parcel it's available globaly so we can start a dev server
```shell
parcel ./public/index.html
```
```shell
Server running at http://localhost:1234
```
or can blundle it uglify
```shel
parcel build ./public/index.html
```
this would generate in ./public/dist/ with a main.xxx.js & main.xxx.css both minified