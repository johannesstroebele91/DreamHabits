import { Component, OnInit, Input } from '@angular/core';
import { Habit} from '../habit';

@Component({
  selector: 'app-habit-detail',
  templateUrl: './habit-detail.component.html',
  styleUrls: ['./habit-detail.component.css']
})
export class HabitDetailComponent implements OnInit {

  @Input() habit: Habit;

  constructor() { }

  ngOnInit() {
  }

}
