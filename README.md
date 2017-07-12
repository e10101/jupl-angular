# jupl-angular

## Setup
```
git clone https://github.com/e10101/jupl-angular.git
```

```
cd jupl-angular
npm install
```

## Run
You should install [ng-cli](https://github.com/angular/angular-cli) first.

```
ng serve --port 4208 --open
```

## Structure
```
|- App
  |-- app
    |-- app.module
    |-- app-routing.module
    |-- app.component(ts, html, css)
  |-- Dashboard
    |-- dashboard.module
    |-- dashboard-routing.module
    |-- dashboard.component(ts, html, css)
  |-- Devices
    |-- devices.module
    |-- devices-routing.module
    |-- device  // model
    |-- device.service
    |-- devices.component(ts, html, css)
    |-- device-detail.component(ts, html, css)
    |-- device-detail-config.component(ts, html)
```

## Technologies
 - [TypeScript](https://www.typescriptlang.org/)
 - [ng-cli](https://github.com/angular/angular-cli)
 - [Angular4](https://angular.io/)
 - [Material UI](https://material.angular.io/)
 - [VSCode](https://code.visualstudio.com/)
 

## Todo
 - Finish the info/alerts/reports interface design
 - Add route guards
 - Add more test
 - Rewrite the html elements to directives
 - Add sub routes
 - Add login module and remove the hard coded authorization header
