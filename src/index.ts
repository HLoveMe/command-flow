import { range, Subject } from "rxjs";
import { take, map, delay } from "rxjs/operators";

const sub = new Subject();
sub.subscribe({
  next: (a) => {
    console.log("next", a)
  },
  complete: () => {
    console.log("complete")
  }
})
range(1, 10).pipe(
  take(4),
  map(x => x + 10),
  delay(500)
).subscribe(sub)