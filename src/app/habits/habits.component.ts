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

  /* Creating an Object 'habit' based on the Class = 'Habit */
  habit: Habit = {
    id: 1,
    name: 'Sample'
  };

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

  /*will not work in a real app,
  * because only mock objects (synchron vs asynchron)
  * -> observable service*/
  getHabits(): void {
    this.habits = this.habitService.getHabits();

  }

}
