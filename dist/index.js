"use strict";
// import { Context } from "./Base/Context";
// import { Base64DecodeWork, Base64EnCodeWork } from "./Base/Works/Base64Work";
// import { InOutString } from "./Base/Object/InOutputValue";
// import { BehaviorSubject } from "rxjs";
// import { takeLast } from "rxjs/operators";
// import { QRCodeWork } from "./Base/Works/QRCodeWork";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var EquipmentTools_1 = require("./Base/Util/EquipmentTools");
// const context = new Context();
// context.addWork(new Base64EnCodeWork())
// context.addWork(new Base64DecodeWork())
// context.addWork(new QRCodeWork())
// context.testRun(new InOutString("https://www.baidu.com/s?ie=UTF-8&wd=jimp"))
// // var qr = require('qr-image');
// // const a = qr.imageSync("AAAA", { type: "svg" })
// // console.log(Buffer.from(a).toString('base64'))
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype._isAA = function () { };
    __decorate([
        EquipmentTools_1.isNode,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], A.prototype, "_isAA", null);
    return A;
}());
console.log(new A()._isAA());
//# sourceMappingURL=index.js.map