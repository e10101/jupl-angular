import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevicesComponent } from './devices.component';
import { DeviceDetailComponent } from './device-detail.component';
import { DeviceDetailConfigComponent } from './device-detail-config.component';

const devicesRoutes: Routes = [
  { path: 'devices',  component: DevicesComponent },
  { path: 'device/config/:id', component: DeviceDetailConfigComponent },
  { path: 'device/:id', component: DeviceDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(devicesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevicesRoutingModule { }
