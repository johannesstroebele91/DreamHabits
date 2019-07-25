/* From Input Fields from ngModel directive
* need to be imported in app.module.ts*/
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HabitsComponent } from './habits/habits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitsComponent,
    HeaderComponent,
    HabitDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
