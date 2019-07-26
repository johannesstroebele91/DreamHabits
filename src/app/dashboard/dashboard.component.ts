import { Component, OnInit } from '@angular/core';
/* Import the class 'Habit' */
import { Habit } from '../habit';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  habits: Habit[] = [];

  constructor(private habitService: HabitService) { }

  ngOnInit() {
    this.getHabits();
  }

  // getHabits() returns the sliced list of habits at positions 1 and 5
  getHabits(): void {
    this.habitService.getHabits()
      .subscribe(habits => this.habits = habits.slice(1, 5));
  }
}
