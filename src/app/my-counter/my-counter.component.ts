import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './store/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;
  // count = 0;

  // constructor() {
  // }

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    // this.count ++;
    this.store.dispatch(increment());
  }

  decrement() {
    // this.count --;
    this.store.dispatch(decrement());
  }

  reset() {
    // this.count = 0;
    this.store.dispatch(reset());
  }
}
