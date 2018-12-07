## Preparation

```
git clone https://github.com/mihirogi/scrapbox-lambda.git
cd angular-my-site/
npm install
cd semantic
gulp build
cd ..
ng serve --open
```

## deploy

```
cd angular-my-site/
ng build
sls deploy -v
```
