import { Injectable } from '@angular/core';
import { Habit} from '../app/habit';
import { HABITS} from '../app/mock-habits';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private messageService: MessageService) { }

  /* Simulate getting data from the server with the RxJS of() function*/
  getHabits(): Observable<Habit[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HabitService: fetched habits');
    return of (HABITS);
  }

  getHabit(id: number): Observable<Habit> {
    // TODO: send the message _after_ fetching the habit
    this.messageService.add(`HabitService: fetched habit id=${id}`);
    return of(HABITS.find(habit => habit.id === id));
  }
}
