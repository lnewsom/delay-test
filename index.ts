import { of } from 'rxjs'; 
import { catchError, delay, map, mergeMap } from 'rxjs/operators';


const source = of('World').pipe(
  delay(10),
  map(x => ({
    customerUuid: x
  })),
  catchError(() => of('error'))
);

source.subscribe(console.log);