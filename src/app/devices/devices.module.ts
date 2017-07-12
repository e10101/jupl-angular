import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { DevicesComponent } from './devices.component';
import { DeviceDetailComponent } from './device-detail.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { DeviceService } from './device.service';
import { DeviceDetailConfigComponent } from './device-detail-config.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DevicesRoutingModule,
    MaterialModule,
  ],
  declarations: [
    DevicesComponent,
    DeviceDetailComponent,
    DeviceDetailConfigComponent,
  ],
  providers: [ DeviceService ]
})
export class DevicesModule {}
