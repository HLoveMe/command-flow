import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { BooleanObject } from "../Object";
import { Value } from "../Object";
import { StringObjectAble } from "../Object/Able/Base/StringObject";
export interface RunTimeInfo {
    name: string;
    platform: any;
}
export declare type PathLike = string | URL;
export interface CommandStatus {
    command: string;
    status: boolean;
    error?: Error;
    result?: string;
}
export interface QRcodeOption {
    type: TypeNumber;
    Level: ErrorCorrectionLevel;
    SideLength: number;
}
export declare enum FileType {
    Audio = "audio/*",
    Video = "video/*",
    HTML = "text/html",
    Txt = "text/plain",
    Image = "image/*",
    Csv = ".csv",
    Pdf = "application/pdf",
    Word = "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword\uFF0Capplication/vnd.openxmlformats-officedocument.wordprocessingml.document",
    All = "*"
}
export interface FileOption {
    type: FileType;
}
export interface FileLoadEvent {
    total: number;
    loaded: number;
    data: ArrayBuffer;
    finish: boolean;
    file?: File;
}
export interface RequestTimeOut {
    timeout: number;
}
export declare type RequestMethod = "GET" | "POST" | "PUT" | "OPTIONS" | "DELETE";
export interface RequestParamsInit {
    headers?: {
        [key: string]: any;
    };
    method?: RequestMethod;
    timeout?: number;
    data?: any;
    url: string;
}
export declare type RequestParams = AxiosRequestConfig;
export declare enum SupportContentType {
    JSON = "application/json",
    TEXT = "text/plain"
}
export interface ResponseContent {
    error?: Error;
    data?: any;
    response: AxiosResponse;
}
/**
 * 硬件驱动部分
 */
export declare namespace Hardware {
    type DataString = string;
    interface ImageResponse {
        image: DataString;
        error?: Error;
    }
    interface TakePhotoOption {
    }
    interface VideoOption {
    }
    interface VideoResponse {
        videoUrl?: string;
        error?: Error;
    }
    interface PositionResponse {
        longitude?: number;
        latitude?: number;
        accuracy?: number;
    }
    interface PositionOption {
    }
    interface AudioResponse {
    }
    interface VibratorOption {
    }
    interface BluetoothDevice {
    }
    interface SpeechOption {
    }
    interface SpeechResponse {
    }
    interface Permission {
    }
    interface PlatformDrive extends Permission {
        takePhoto(option: TakePhotoOption): Promise<ImageResponse>;
        recordVideo(option: VideoOption): Promise<VideoResponse>;
        getPhotos(): Promise<Array<ImageResponse>>;
        getCurrentPosition(): Promise<PositionResponse>;
        watchPosition(option: PositionOption): Observable<PositionResponse>;
        closePosition(): Promise<boolean>;
        recordAudio(): Promise<AudioResponse>;
        stopAudio(): Promise<Boolean>;
        getFile(option: any): Promise<any>;
        startVibrator(option: VibratorOption): Promise<Boolean>;
        stopVibrator(): Promise<Boolean>;
        getSystemInfo(): Promise<RunTimeInfo>;
        getVolume(): Promise<number>;
        setVolume(volume: number): Promise<Boolean>;
        getBrightness(): Promise<number>;
        setBrightness(brightness: number): Promise<Boolean>;
        scanBluetooth(): Promise<Array<BluetoothDevice>>;
        connectBluetooth(device: BluetoothDevice): Promise<Boolean>;
        bluetoothSendData(data: String): Promise<Boolean>;
        bluetoothReceiveData(device: BluetoothDevice): Observable<String>;
        bluetoothClose(device: BluetoothDevice): Promise<Boolean>;
        speechInit(option: SpeechOption): Promise<Boolean>;
        speak(text: string): Promise<SpeechResponse>;
        stopSpeak(): Promise<SpeechResponse>;
        clearSpeech(): Promise<Boolean>;
    }
}
export declare interface PlatformBridgeAble extends Hardware.PlatformDrive {
    loadRunInfo(): Observable<RunTimeInfo>;
    /***
     * 运行一个脚本 path
     * 运行 javascript
     */
    runCommand(command: string, option?: any): Observable<CommandStatus>;
    open(url: String, option?: any): Observable<BooleanObject>;
    loadFile(url: PathLike, option?: FileOption): Observable<Value.ObjectAble<FileLoadEvent>>;
    createQrCode(context: String, option?: QRcodeOption): Observable<StringObjectAble>;
    fetch(req: AxiosRequestConfig): Observable<Value.ObjectAble<ResponseContent>>;
}
//# sourceMappingURL=ConfigTypes.d.ts.map