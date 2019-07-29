# Yakchat cloud functions

## Enviroment Variables
### add variables to firebase (their are stored on cloud)
```bash
firebase functions:config:set auth.secret="AUTH_SECRET";
firebase functions:config:set mail.username="MAIL_ADDRESS";
firebase functions:config:set mail.password="MAIL_PASSWORD";
```
### get the virables for development testing

bash
```bash
firebase functions:config:get > .runtimeconfig.json
```
powershell
```bash
firebase functions:config:get | ac .runtimeconfig.json
```
## Run development
for bash testing
```bash
npm run start
```
hosting functions as webservices
```bash
npm run serve
```

## Deploy
```bash
npm run deploy
```