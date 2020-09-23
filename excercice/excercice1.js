import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators'

console.log('test');
of(1, 2, 3, 4, 5)
                  .pipe(
                      filter(x => x % 2 === 0),
                      map(x => x + 1),
                  )
                  .subscribe(console.log);