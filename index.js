const { of, range } = require('rxjs');
const { map } = require("rxjs/operators")

range(1, 10).pipe(
  map(x=>{
    if(x==5)throw "RRR";
    else return x
  })
).subscribe({
  next:(x)=>{
    if(x==3)throw "AAA"
    console.log(x,1111)
  },
  error:(err)=>{
    console.log(err,2222)
  }
})