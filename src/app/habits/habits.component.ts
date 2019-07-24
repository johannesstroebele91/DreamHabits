import { Component, OnInit } from '@angular/core';
/* Import the class 'Habit' */
import { Habit } from '../habit';
import { HABITS } from '../mock-habits';


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

  /* Definition of component property called "habits"
  * to expose the "HABITS" array from the server
  * for binding. */
  habits = HABITS;

  selectedHabit: Habit;

  constructor() { }

  ngOnInit() {
  }

  /* Assigment of the clicked habit from the template
  * to the component's selectedHabit*/
  onSelect(habit: Habit): void {
    this.selectedHabit = habit;

  }
}
