import { Component, OnInit } from '@angular/core';
/* Import the class 'Habit' */
import { Habit } from '../habit';
import { HabitService } from '../habit.service';


@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {

  selectedHabit: Habit;

  habits: Habit[];

  constructor(private habitService: HabitService) { }

  ngOnInit() {
    this.getHabits();
  }

  /* Assigment of the clicked habit from the template
  * to the component's selectedHabit*/
  onSelect(habit: Habit): void {
    this.selectedHabit = habit;
  }

  getHabits(): void {
    /* Will not work in a real app,
    * because only mock objects (synchron vs asynchron)
    * -> observable service
    this.habits = this.habitService.getHabits();*/
    this.habitService.getHabits()
      .subscribe(habits => this.habits = habits);
  }


}
