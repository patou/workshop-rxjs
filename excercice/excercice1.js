import { of } from 'rxjs';
import { map } from 'rxjs/operators'

console.log('test');
of(1, 2, 3, 4, 5)
.pipe(map(console.log)).subscribe();