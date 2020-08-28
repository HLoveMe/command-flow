"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var sub = new rxjs_1.Subject();
sub.subscribe({
    next: function (a) {
        console.log("next", a);
    },
    complete: function () {
        console.log("complete");
    }
});
rxjs_1.range(1, 10).pipe(operators_1.take(4), operators_1.map(function (x) { return x + 10; }), operators_1.delay(500)).subscribe(sub);
//# sourceMappingURL=index.js.map