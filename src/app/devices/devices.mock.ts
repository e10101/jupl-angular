/**
 * Mock Devices List
 */
import { Device } from './device';

export const DEVICES: Device[] = [
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
    'VigilId': 40073,
    'Uid': 'R5AJ206MP1D',
    'Model': {
      'RuntimeSettings': {
        'ReportInterval': 900,
        'PingInterval': 900,
        'PreAlarmPeriod': 10,
        'AdherenceCheckInterval': 3600,
        'AlarmClearTimeout': 600,
        'AlarmCancelTimeout': 15,
        'DailyReportInterval': 43200,
        'GeoLocationRetryCount': 3,
        'GeoLocationHighAccuracy': true,
        'GeoLocationTimeOut': 5000,
        'GeoMaxAgeTimeOut': 60,
        'CmfPhoneNumber': null,
        'PalmTouchTrigger': true,
        'TouchTriggerCooldownPeriod': 30,
        'DemoMode': false,
        'DeviceName': null,
        'VerboseLogging': false
      }
    }
  },
  {
    'VigilId': 40074,
    'Uid': 'R5AJ20D1PAH',
    'Model': {
      'RuntimeSettings': {
        'ReportInterval': 900,
        'PingInterval': 900,
        'PreAlarmPeriod': 10,
        'AdherenceCheckInterval': 3600,
        'AlarmClearTimeout': 600,
        'AlarmCancelTimeout': 15,
        'DailyReportInterval': 43200,
        'GeoLocationRetryCount': 3,
        'GeoLocationHighAccuracy': true,
        'GeoLocationTimeOut': 5000,
        'GeoMaxAgeTimeOut': 60,
        'CmfPhoneNumber': null,
        'PalmTouchTrigger': true,
        'TouchTriggerCooldownPeriod': 30,
        'DemoMode': false,
        'DeviceName': null,
        'VerboseLogging': false
      }
    }
  }
];
