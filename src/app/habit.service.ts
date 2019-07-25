import { Injectable } from '@angular/core';
import { Habit} from './habit';
import { HABITS} from './mock-habits';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  // Simulate getting data from the server with the RxJS of() function
  getHabits(): Observable<Habit[]> {
    return of (HABITS);
  }
  constructor() { }
}
