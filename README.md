# cb-portal-mfe

![alt text](https://raw.githubusercontent.com/CrisBogucki/cb-portal-mfe/master/assets/demo2.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a090ec02-0dcd-460b-b96d-6b5d92979de8/deploy-status)](https://app.netlify.com/sites/cb-portal/deploys)


live demo : https://cb-portal.netlify.app/

### Create portal app
- `ng new cb-portal-mfe --create-application=false`
- `npm i yarn --save`
- `ng config cli.packageManager yarn`
- `ng g application c-portal --routing --style=scss`
- `ng add @angular-architects/module-federation --project=c-portal --port=4200`
- `yarn install`

- add to package json 

  ```json
  ...
  "resolutions": {
    "webpack": "^5.4.0",
    "license-webpack-plugin": "2.3.17"
  }
  ...
  ```

### Create sample module by portal
- `ng g application c-sample-app --routing --style=scss`
- `ng g m sample-app --project=c-sample-app`
- `ng config cli.packageManager yarn`
- `ng add @angular-architects/module-federation --project=c-sample-app --port=4201`
