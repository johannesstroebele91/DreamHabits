import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitsComponent } from './habits/habits.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HabitDetailComponent} from './habit-detail/habit-detail.component';
import { HomeComponent } from './home/home.component';

/* Setting a route:
* path: is the path in the URL
* component: which component will be displayed if user navigated to the path */
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HabitDetailComponent},
  {path: 'habits', component: HabitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
