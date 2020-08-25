var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log(1, params);
        console.log(2, target);
        console.log(3, methodName);
        console.log(4, paramsIndex);
    };
}
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.getData = function (uuid) {
        console.log('我是getData里面的方法,uuid=', uuid);
    };
    __decorate([
        __param(0, logParams('abcd')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], A.prototype, "getData", null);
    return A;
}());
new A().getData(111);
//# sourceMappingURL=index.js.map