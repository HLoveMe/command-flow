import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { BooleanObject, StringObject } from "../Object/Able/ObjectAble";
import { Value } from "../Types";

export interface RunTimeInfo {
  name: string;
  platform: any;
}

export type PathLike = string | URL;
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

export enum FileType {
  Audio = "audio/*",
  Video = "video/*",
  HTML = "text/html",
  txt = "text/plain",
  Image = "image/*",
  Csv = ".csv",
  Pdf = "application/pdf",
  Word = "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword，application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  All = "*",
}
export interface FileOption {
  type: FileType;
}
export interface FileLoadEvent {
  total: number;
  loaded: number;
  data: ArrayBuffer;
  finish: boolean;
  file: File,
}

export interface RequestTimeOut {
  timeout: number;
}
export declare type RequestMethod = "GET" | "POST" | "PUT" | "OPTIONS" | "DELETE";
export interface RequestParamsInit {
  headers?: { [key: string]: any };
  method?: RequestMethod;
  timeout?: number;
  data?: any;
  url: string;
}
export type RequestParams = AxiosRequestConfig
export enum SupportContentType {
  JSON = "application/json",
  TEXT = "text/plain",
}
export interface ResponseContent {
  error?: Error;
  data?: any;
  response: AxiosResponse;
}

/**
 * 硬件驱动部分
 */
export namespace Hardware {
  // 拍照
  // 视频
  // 相片
  // 地理位置
  // 录音
  // 文件
  // 震动 =>手机
  // 传感器
  // 调节/获取音量 =>手机 
  // 调节/获取亮度 =>手机 
  // 系统信息
  // 蓝牙状态/开关/发送数据/监听/关闭
  // 语音播放文字
  export type DataString = string;
  export interface ImageResponse {
    image: DataString;
    error?: Error;
  }
  export interface TakePhotoOption { }

  export interface VideoOption { }
  export interface VideoResponse {
    videoUrl?: string;
    error?: Error;
  }
  export interface PositionResponse {
    longitude?: number;
    latitude?: number;
    accuracy?: number;
  }
  export interface PositionOption { }
  export interface AudioResponse { }

  export interface VibratorOption { }
  export interface BluetoothDevice { }
  export interface SpeechOption { }
  export interface SpeechResponse { }

  export interface Permission {
    // 权限处理
  }
  export interface PlatformDrive extends Permission {
    // 拍照
    takePhoto(option: TakePhotoOption): Promise<ImageResponse>;
    // 视频
    recordVideo(option: VideoOption): Promise<VideoResponse>;

    // 相片
    getPhotos(): Promise<Array<ImageResponse>>;

    // 地理位置
    getCurrentPosition(): Promise<PositionResponse>;
    watchPosition(option: PositionOption): Observable<PositionResponse>;
    closePosition(): Promise<boolean>;

    // 录音
    recordAudio(): Promise<AudioResponse>;
    stopAudio(): Promise<Boolean>;

    // 文件
    getFile(option: any): Promise<any>;

    // start 震动
    startVibrator(option: VibratorOption): Promise<Boolean>;
    stopVibrator(): Promise<Boolean>;

    //传感器 距离传感器 加速度传感器 陀螺仪 磁力计

    // 系统信息
    getSystemInfo(): Promise<RunTimeInfo>;

    //音量
    getVolume(): Promise<number>;
    setVolume(volume: number): Promise<Boolean>;

    //亮度
    getBrightness(): Promise<number>;
    setBrightness(brightness: number): Promise<Boolean>;

    //蓝牙
    scanBluetooth(): Promise<Array<BluetoothDevice>>;
    connectBluetooth(device: BluetoothDevice): Promise<Boolean>;
    bluetoothSendData(data: String): Promise<Boolean>;
    bluetoothReceiveData(device: BluetoothDevice): Observable<String>;
    bluetoothClose(device: BluetoothDevice): Promise<Boolean>;

    //语音
    speechInit(option: SpeechOption): Promise<Boolean>;
    speak(text: string): Promise<SpeechResponse>;
    stopSpeak(): Promise<SpeechResponse>;
    clearSpeech(): Promise<Boolean>;
  }

}


export declare interface PlatformBridgeAble extends Hardware.PlatformDrive {
  // // 硬件相关
  // hardwareSource?: Hardware.PlatformDrive;

  //计算机运行相关硬件
  loadRunInfo(): Observable<RunTimeInfo>;
  //命令行工具
  /***
   * 运行一个脚本 path
   * 运行 javascript
   */
  runCommand(command: string, option?: any): Observable<CommandStatus>;

  //计算机操作
  open(url: String, option?: any): Observable<BooleanObject>;

  //文件相关
  loadFile(
    url: PathLike,
    option?: FileOption
  ): Observable<Value.ObjectAble<FileLoadEvent>>;

  // 工具
  createQrCode(
    context: String,
    option?: QRcodeOption
  ): Observable<StringObject>;

  // 网络
  // 仅仅支持json/txt
  fetch(req: AxiosRequestConfig): Observable<Value.ObjectAble<ResponseContent>>;
}

// export interface BasePlatformBridgeAble extends PlatformBridgeAble { }

// export interface WebBridgeAble extends BasePlatformBridgeAble { }
// export interface NodejsBridgeAble extends BasePlatformBridgeAble { }

// export interface MobilePlatformBridgeAble extends PlatformBridgeAble { }

// export interface MobileWebBridgeAble extends MobilePlatformBridgeAble { }
// export interface MobileNodejsBridgeAble extends MobilePlatformBridgeAble { }
