import { Component, OnInit } from '@angular/core';
import { Habit} from '../habit';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-habit-detail',
  templateUrl: './habit-detail.component.html',
  styleUrls: ['./habit-detail.component.css']
})
export class HabitDetailComponent implements OnInit {

  habit: Habit;

  /* Injecting the services into the constructor
  * which saves their values in private fields */
  constructor(
    private route: ActivatedRoute, // holds info about the route to this instance of the HabitDetailComponent
    private habitService: HabitService, // gets habit data from the remote server
    private location: Location // Angular service for interacting with the browser for navigating back
  ) { }

  ngOnInit(): void {
    this.getHabit();
  }

  // Extract the id route parameter (+ operator converts a string into a number)
  getHabit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.habitService.getHabit(id)
      .subscribe(hero => this.habit = hero);
  }

  // Going back is enabled via location Angular service
  goBack(): void {
    this.location.back();
  }

}
