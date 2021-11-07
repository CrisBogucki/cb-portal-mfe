# cb-portal-mfe

### Create portal app
- `ng new cb-portal-mfe --create-application=false`
- `npm i yarn --save`
- `ng config cli.packageManager yarn`
- `ng g application c-portal --routing --style=scss`
- `ng add @angular-architects/module-federation --project=c-portal --port=4200`
- `yarn install`

### Create sample module by portal
- `ng g application c-sample-app-name --routing --style=scss`
- `ng add @angular-architects/module-federation --project=c-sample-app-name --port=4201`
