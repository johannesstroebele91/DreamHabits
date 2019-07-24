import { Component, OnInit } from '@angular/core';
/* Import the class 'Habit' */
import { Habit } from '../habit';

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

  constructor() { }

  ngOnInit() {
  }

}
