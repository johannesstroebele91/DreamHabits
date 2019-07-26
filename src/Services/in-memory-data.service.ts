import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Habit} from '../app/habit';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  // Overrides the genId method to ensure that a habit always has an id.
  // If the habits array is empty,
  // the method below returns the initial number (11).
  // if the habits array is not empty, the method below returns the highest
  // habit id + 1.
  static genId(habits: Habit[]): number {
    return habits.length > 0 ? Math.max(...habits.map(habit => habit.id)) + 1 : 11;
  }

  createDb() {
    const habits = [
      { id: 1, name: 'Reading' },
      { id: 2, name: 'Drawing' },
      { id: 3, name: 'Travelling' },
      { id: 4, name: 'Cooking' },
      { id: 5, name: 'Tennis' },
      { id: 6, name: 'Bowling' }
    ];
    return {habits};
  }

}
