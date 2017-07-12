import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Device } from './device';
import { DeviceService } from './device.service';

@Component({
  selector: 'device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: [ './device-detail.component.css' ]
})
export class DeviceDetailComponent implements OnInit {
  device: Device;

  constructor(
    private DeviceService: DeviceService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.DeviceService.getDevice(+params.get('id')))
      .subscribe(device => this.device = device);
  }

  goBack(): void {
    this.location.back();
  }

  gotoEdit(): void {
    const link = ['/device/config', this.device.VigilId];
    this.router.navigate(link);
  }
}
