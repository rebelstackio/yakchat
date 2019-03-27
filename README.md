# yakchat
A chat similar to slack that can be embbeded on your website

## Pre Requisites

then install the dependecies for both projects(backoffice and frontscript) with:

```shell
npm install
```

__NOTE__ You can install just one project's dependecies, just go to the target folder ans run
```npm install```

## Common Scripts

Instead of go to the target project(frontscript or backoffice) and install dependecies or start the dev server in that location, you can do the same in the parent folder with the following common commands and run and test both applications at the same time with just one console.

### Launch Backoffice and FrontScript at the same time

This command launch the backoffice and the frontscript at the same time in different ports
```shell
npm start
```

- backoffice at http://localhost:8080
- frontscript  at http://localhost:8081

### Launch Backoffice only

```shell
npm run start:bo
```

Or you can just go to the `backoffice` folder and run  `npm start`

### Build Backoffice only

```shell
npm run build:bo
```

Or you can just go to the `backoffice` folder and run  `npm run build`

### Launch FrontScript only

```shell
npm run start:fs
```

Or you can just go to the `front-script` folder and run  `npm start`

### Build FrontScript only

```shell
npm run build:fs
```

Or you can just go to the `front-script` folder and run  `npm run build`

