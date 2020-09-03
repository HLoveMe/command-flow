const { of, range, Subject } = require('rxjs');
const { map, takeLast } = require("rxjs/operators")

var a = new Subject();
a.pipe(
  takeLast(1)
).subscribe(x=>{
  console.log("90909090",x);
})

a.complete()