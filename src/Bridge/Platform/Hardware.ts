import { Observable } from "rxjs";
import { Hardware, RunTimeInfo } from "../ConfigTypes";


export class HardwareBase implements Hardware.PlatformDrive {
  requestPermission(option: Hardware.PermissionOption): Promise<Hardware.PermissionResult> {
    throw new Error("Method not implemented.");
  }
  hasPermission(option: Hardware.PermissionOption): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  takePhoto(option: Hardware.TakePhotoOption): Promise<Hardware.ImageResponse> {
    throw new Error("Method not implemented.");
  }
  recordVideo(option: Hardware.VideoOption): Promise<Hardware.VideoResponse> {
    throw new Error("Method not implemented.");
  }
  getPhotos(): Promise<Hardware.ImageResponse[]> {
    throw new Error("Method not implemented.");
  }
  getCurrentPosition(): Promise<Hardware.PositionResponse> {
    throw new Error("Method not implemented.");
  }
  watchPosition(option: Hardware.PositionOption): Observable<Hardware.PositionResponse> {
    throw new Error("Method not implemented.");
  }
  closePosition(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  recordAudio(): Promise<Hardware.AudioResponse> {
    throw new Error("Method not implemented.");
  }
  stopAudio(): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  getFile(option: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  startVibrator(option: Hardware.VibratorOption): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  stopVibrator(): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  getSystemInfo(): Promise<RunTimeInfo> {
    throw new Error("Method not implemented.");
  }
  getVolume(): Promise<number> {
    throw new Error("Method not implemented.");
  }
  setVolume(volume: number): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  getBrightness(): Promise<number> {
    throw new Error("Method not implemented.");
  }
  setBrightness(brightness: number): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  scanBluetooth(): Promise<Hardware.BluetoothDevice[]> {
    throw new Error("Method not implemented.");
  }
  connectBluetooth(device: Hardware.BluetoothDevice): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  bluetoothSendData(data: String): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  bluetoothReceiveData(device: Hardware.BluetoothDevice): Observable<String> {
    throw new Error("Method not implemented.");
  }
  bluetoothClose(device: Hardware.BluetoothDevice): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  speechInit(option: Hardware.SpeechOption): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  speak(text: string): Promise<Hardware.SpeechResponse> {
    throw new Error("Method not implemented.");
  }
  stopSpeak(): Promise<Hardware.SpeechResponse> {
    throw new Error("Method not implemented.");
  }
  clearSpeech(): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }

}