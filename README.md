## Preparation

```
git clone https://github.com/mihirogi/angular-my-site.git
cd angular-my-site/
npm install
cd semantic
gulp build
cd ..
ng serve --open
```

## Deploy

```
cd angular-my-site/
ng build --prod
sls deploy -v
```
