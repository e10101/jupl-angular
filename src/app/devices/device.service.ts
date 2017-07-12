import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Device } from './device';

const DEVICES: Device[] = [
    {
        'VigilId': 40072,
        Uid: 'R3AJ1001EMH',
        'Model': {
            'RuntimeSettings': {
                'ReportInterval': 1000,
                'PingInterval': 1000,
                'PreAlarmPeriod': 10,
                'AdherenceCheckInterval': 400,
                'AlarmClearTimeout': 900,
                'AlarmCancelTimeout': 15,
                'DailyReportInterval': 42000,
                'GeoLocationRetryCount': 5,
                'GeoLocationHighAccuracy': false,
                'GeoLocationTimeOut': 500,
                'GeoMaxAgeTimeOut': 60,
                'CmfPhoneNumber': '+64123456789',
                'PalmTouchTrigger': false,
                'TouchTriggerCooldownPeriod': 30,
                'DemoMode': false,
                'DeviceName': 'i can edit this again',
                'VerboseLogging': true
            }
        }
    },

    {
        'VigilId': 400723,
        Uid: 'R3AJ1001EMH',
        'Model': {
            'RuntimeSettings': {
                'ReportInterval': 1000,
                'PingInterval': 1000,
                'PreAlarmPeriod': 10,
                'AdherenceCheckInterval': 400,
                'AlarmClearTimeout': 900,
                'AlarmCancelTimeout': 15,
                'DailyReportInterval': 42000,
                'GeoLocationRetryCount': 5,
                'GeoLocationHighAccuracy': false,
                'GeoLocationTimeOut': 500,
                'GeoMaxAgeTimeOut': 60,
                'CmfPhoneNumber': '+64123456789',
                'PalmTouchTrigger': false,
                'TouchTriggerCooldownPeriod': 30,
                'DemoMode': false,
                'DeviceName': 'i can edit this again',
                'VerboseLogging': true
            }
        }
    }
];

const devicesPromise = Promise.resolve(DEVICES);

@Injectable()
export class DeviceService {
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer RJ56/Rw5vEO2WfAdPih5Lw==',
    });
    private baseUrl = 'https://preprod.vbn.care/api2/v2';
    private devicesUrl = this.baseUrl + '/device';

    constructor(private http: Http) { }

    getDevices() { return devicesPromise; }

    getDevice(id: number | string) {
        // return devicesPromise
        //   .then(devices => devices.find(device => device.VigilId === +id));

        const url = `${this.devicesUrl}/${id}?names=RuntimeSettings`;
        return this.http.get(url, {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Device)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
