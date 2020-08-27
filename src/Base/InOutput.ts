import { InOutputAble, AbleType, InOutData } from "./Type";
import { of, Observable } from "rxjs"

export class InOutNumber extends Number implements InOutputAble {
  value(): Observable<AbleType> {
    return of(this.valueOf())
  }
}
export class InOutString extends String implements InOutputAble{
  value():Observable<AbleType>{
    return of(this.toString())
  }
}
export class FileSource implements InOutputAble{
  value(): InOutData {
    throw new Error("Method not implemented.");
  }

}