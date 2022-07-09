import { Observable } from "rxjs";
import { Hardware, RunTimeInfo } from "../ConfigTypes";
export declare class HardwareBase implements Hardware.PlatformDrive {
    takePhoto(option: Hardware.TakePhotoOption): Promise<Hardware.ImageResponse>;
    recordVideo(option: Hardware.VideoOption): Promise<Hardware.VideoResponse>;
    getPhotos(): Promise<Hardware.ImageResponse[]>;
    getCurrentPosition(): Promise<Hardware.PositionResponse>;
    watchPosition(option: Hardware.PositionOption): Observable<Hardware.PositionResponse>;
    closePosition(): Promise<boolean>;
    recordAudio(): Promise<Hardware.AudioResponse>;
    stopAudio(): Promise<Boolean>;
    getFile(option: any): Promise<any>;
    startVibrator(option: Hardware.VibratorOption): Promise<Boolean>;
    stopVibrator(): Promise<Boolean>;
    getSystemInfo(): Promise<RunTimeInfo>;
    getVolume(): Promise<number>;
    setVolume(volume: number): Promise<Boolean>;
    getBrightness(): Promise<number>;
    setBrightness(brightness: number): Promise<Boolean>;
    scanBluetooth(): Promise<Hardware.BluetoothDevice[]>;
    connectBluetooth(device: Hardware.BluetoothDevice): Promise<Boolean>;
    bluetoothSendData(data: String): Promise<Boolean>;
    bluetoothReceiveData(device: Hardware.BluetoothDevice): Observable<String>;
    bluetoothClose(device: Hardware.BluetoothDevice): Promise<Boolean>;
    speechInit(option: Hardware.SpeechOption): Promise<Boolean>;
    speak(text: string): Promise<Hardware.SpeechResponse>;
    stopSpeak(): Promise<Hardware.SpeechResponse>;
    clearSpeech(): Promise<Boolean>;
}
//# sourceMappingURL=Hardware.d.ts.map