import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {

  constructor(private http: HttpClient) {}

  getSecondsLeft(): Observable<number> {
     //return of(55);  // written for testing purpose;
    return this.http.get<{ secondsLeft: number }>('/api/deadline').pipe(
      map(response => response.secondsLeft)
    );
  }
}
