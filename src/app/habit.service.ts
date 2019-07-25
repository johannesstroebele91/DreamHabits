import { Injectable } from '@angular/core';
import { Habit} from './habit';
import { HABITS} from './mock-habits';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  static getHabits(): Habit[] {
    return HABITS;
  }
  constructor() { }
}
