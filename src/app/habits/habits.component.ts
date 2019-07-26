import { Component, OnInit } from '@angular/core';
/* Import the class 'Habit' */
import { Habit } from '../habit';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {

  /* Routing replaces use case for selectedHero property
  selectedHabit: Habit; */

  habits: Habit[];

  constructor(private habitService: HabitService) { }

  ngOnInit() {
    this.getHabits();
  }

  /* Routing replaces use case for onSelect()

  * Assigment of the clicked habit from the template
  ** to the component's selectedHabit

  onSelect(habit: Habit): void {
    this.selectedHabit = habit;
  } */

  getHabits(): void {
    /* Will not work in a real app,
    * because only mock objects (synchron vs asynchron)
    * -> observable service
    this.habits = this.habitService.getHabits();*/
    this.habitService.getHabits()
      .subscribe(habits => this.habits = habits);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.habitService.addHabit({ name } as Habit)
      .subscribe(habit => {
        this.habits.push(habit);
      });
  }
  delete(habit: Habit): void {
    this.habits = this.habits.filter(h => h !== habit);
    this.habitService.deleteHabit(habit).subscribe();
  }

}
