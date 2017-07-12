export class RuntimeSettings {
    ReportInterval: number;
    PingInterval: number;
    PreAlarmPeriod: number;
    AdherenceCheckInterval: number;
    AlarmClearTimeout: number;
    AlarmCancelTimeout: number;
    DailyReportInterval: number;
    GeoLocationRetryCount: number;
    GeoLocationHighAccuracy: boolean;
    GeoLocationTimeOut: number;
    GeoMaxAgeTimeOut: number;
    CmfPhoneNumber: string;
    PalmTouchTrigger: boolean;
    TouchTriggerCooldownPeriod: number;
    DemoMode: boolean;
    DeviceName: string;
    VerboseLogging: boolean;
}

export class Model {
    RuntimeSettings: RuntimeSettings;
}
export class Device {
    VigilId: number;
    Uid: string;
    Model: Model;
}
