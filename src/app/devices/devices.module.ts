import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DevicesComponent } from './devices.component';

import { DevicesRoutingModule } from './devices-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DevicesRoutingModule
  ],
  declarations: [
    DevicesComponent,
  ],
  providers: [  ]
})
export class DevicesModule {}
