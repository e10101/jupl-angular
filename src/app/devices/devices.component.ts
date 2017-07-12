import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

import { Device } from './device';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  providers: [ MdSnackBar ],
})
export class DevicesComponent implements OnInit {
  devices: Device[];

  constructor(
    private service: DeviceService,
    private route: ActivatedRoute,
    private router: Router,
    public snackBar: MdSnackBar,
  ) { }

  ngOnInit() {
    this.service.getDevices()
      .then(devices => this.devices = devices);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }

}
