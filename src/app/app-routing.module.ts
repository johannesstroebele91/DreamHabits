import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitsComponent } from './habits/habits.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HabitDetailComponent} from './habit-detail/habit-detail.component';

/* Setting a route:
* path: is the path in the URL
* component: which component will be displayed if user navigated to the path */
const routes: Routes = [
  {path: 'habits', component: HabitsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: HabitDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
