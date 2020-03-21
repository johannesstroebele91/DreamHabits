import { Injectable } from '@angular/core';
import { Habit} from '../app/habit';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  /* web API expects a special header in HTTP save requests.
  * That header is in the httpOptions */
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private habitsUrl = 'api/habits';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  /* Simulate getting data from the server with the RxJS of() function
  getHabits(): Observable<Habit[]> {
    this.messageService.add('HabitService: fetched habits');
    return of (HABITS);
    }*/

  /* INSTEAD: Get habits from the server */
  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>(this.habitsUrl)
      .pipe(
        tap(_ => this.log('fetched habits')),
        catchError(this.handleError<Habit[]>('getHabits', []))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET habit by id. Will 404 if id not found */
  getHabit(id: number): Observable<Habit> {
    const url = `${this.habitsUrl}/${id}`;
    return this.http.get<Habit>(url).pipe(
      tap(_ => this.log(`fetched habit id=${id}`)),
      catchError(this.handleError<Habit>(`getHabit id=${id}`))
    );
  }
  /** Log a HabitService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HabitService: ${message}`);
  }

  /** PUT: update the habit on the server */
  updateHabit(habit: Habit): Observable<any> {
    return this.http.put(this.habitsUrl, habit, this.httpOptions).pipe(
      tap(_ => this.log(`updated habit id=${habit.id}`)),
      catchError(this.handleError<any>('updateHabit'))
    );
  }

  /** POST: add a new habit to the server */
  addHabit(habit: Habit): Observable<Habit> {
    return this.http.post<Habit>(this.habitsUrl, habit, this.httpOptions).pipe(
      tap((newHabit: Habit) => this.log(`added habit w/ id=${newHabit.id}`)),
      catchError(this.handleError<Habit>('addHabit'))
    );
  }

  /** DELETE: delete the habit from the server */
  deleteHabit(habit: Habit| number): Observable<Habit> {
    const id = typeof habit === 'number' ? habit : habit.id;
    const url = `${this.habitsUrl}/${id}`;

    return this.http.delete<Habit>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted habit id=${id}`)),
      catchError(this.handleError<Habit>('deleteHabit'))
    );
  }
}
