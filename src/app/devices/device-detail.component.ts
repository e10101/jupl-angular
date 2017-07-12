import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { MdSnackBar } from '@angular/material';

import { Device, RuntimeSettings } from './device';
import { DeviceService } from './device.service';

@Component({
  selector: 'device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  device: Device;
  runtimeSettings: RuntimeSettings;

  runtimeSettingsConfig = [
    {
      type: 'intervals',
      name: 'Intervals',
      settings: [
        {
          name: 'Report Interval',
          type: 'ReportInterval',
        },
        {
          name: 'Ping Interval',
          type: 'PingInterval',
        },
        {
          name: 'Pre Alarm Period',
          type: 'PreAlarmPeriod',
        },
        {
          name: 'Adherence Check Interval',
          type: 'AdherenceCheckInterval',
        },
        {
          name: 'Alarm Clear Timeout',
          type: 'AlarmClearTimeout',
        },
        {
          name: 'Alarm Cancel Timeout',
          type: 'AlarmCancelTimeout',
        },
        {
          name: 'Report',
          type: 'ReportInterval',
        },
        {
          name: 'Report',
          type: 'ReportInterval',
        },
        {
          name: 'Report',
          type: 'ReportInterval',
        },
        {
          name: 'Report',
          type: 'ReportInterval',
        },
      ]
    }
  ];

  constructor(
    private DeviceService: DeviceService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    public snackBar: MdSnackBar,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.DeviceService.getDevice(+params.get('id')))
      .subscribe(device => {
        this.device = device;
        this.runtimeSettings = this.device.Model.RuntimeSettings;
      });
  }

  goBack(): void {
    this.location.back();
  }

  gotoEdit(): void {
    const link = ['/device/config', this.device.VigilId];
    this.router.navigate(link);
  }

  updateRuntimeSettings(): void {
    this.DeviceService.updateDeviceRuntimeSettings(this.device)
      .then(() => {
        this.snackBar.open('Update OK', null, {
          duration: 2000,
        });
      }
    );
  }
}
