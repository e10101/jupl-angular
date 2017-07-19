import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Device } from './device';

// Mock devices
import { DEVICES } from './devices.mock';

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
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Device)
            .catch(this.handleError);
    }

    /**
     * Update the device runtime settings
     * @param device Device
     */
    updateDeviceRuntimeSettings(device: Device): Promise<Device> {
        const url = `${this.devicesUrl}/${device.VigilId}?names=RuntimeSettings`;
        const newContent = {
            RuntimeSettings: device.Model.RuntimeSettings
        };
        return this.http
            .put(url, JSON.stringify(newContent), { headers: this.headers })
            .toPromise()
            .then(() => device)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
