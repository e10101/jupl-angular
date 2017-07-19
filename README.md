# jupl-angular

## Demo
https://jupl-angular.appspot.com/

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
    |-- devices.mock // mock devices
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
 
## About the project
 - By using the [ng-cli](https://github.com/angular/angular-cli) tool to create the project, the main changes are under the `src/app` folder.
 - Add the `Dashboard` module to display the default home page.
 - Add the `Device` module to get and display device information.
 - Add the `Devices` component to display all devices under the user account;
 - Add the `DeviceDetail` component to display information for a specific Device. Currently, only the RuntimeSettings section is implemented.
 - Get and update RuntimeSettings by using the `Device` service.
 - Using the [Material UI](https://material.angular.io/), and `md-tab`, `md-toolbar`, `md-list`, `md-card` and other directives.
 - Deploy the program to [Google App Engine](https://cloud.google.com/appengine/) for online demonstration.
 

## Todo
 - Finish the info/alerts/reports interface design
 - Add route guards
 - Add more test
 - Rewrite the html elements to directives
 - Add sub routes
 - Add login module and remove the hard coded authorization header
