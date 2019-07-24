/* Fix missing The missing FormsModule "ngModel":
* Angular needs to know metadata:
* it describes how the pieces of your app fit together and
* what other files and libraries the app requires

Where is the meta data?
1) Some of the metadata is
* in the @Component decorators that you added to your component classes.
2) Other critical metadata is
* in @NgModule decorators
* which annotates the top-level AppModule class (app.module.ts)

How should the metadata imported?
* Import Modules like this:
a) import the FormsModule symbol
* from the @angular/forms library
-> "import { FormsModule } from '@angular/forms'; // <-- NgModel lives here"
b) add FormsModule
* to the @NgModule metadata's imports array
* which contains a list of external modules
* that the app needs
-> "imports: [BrowserModule, FormsModule],"
*/
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Declaration of Components
 * Every component must be declared in EXACTLY "1" NgModule!
 * The declaration happens
 * automatically in the AppModule
 * when the component is generated
 a) import { HeroesComponent } from './heroes/heroes.component';
 b) declarations: [ AppComponent, HeroesComponent ],
*/
import { HabitsComponent } from './habits/habits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HabitsComponent
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
