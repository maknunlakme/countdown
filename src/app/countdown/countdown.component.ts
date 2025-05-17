import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DeadlineService} from '../services/deadline.service';
import {BehaviorSubject, interval, map, switchMap, takeWhile} from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-countdown',
  imports: [AsyncPipe, NgIf],
  templateUrl: './countdown.component.html',
  standalone: true,
  styleUrl: './countdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent implements OnInit {
  secondsLeft$ = new BehaviorSubject<number | null>(null);

  constructor(private deadlineService: DeadlineService) {}

  ngOnInit(): void {
    this.deadlineService.getSecondsLeft().pipe(
      switchMap(seconds =>
        interval(1000).pipe(
          map(elapsed => seconds - elapsed),
          takeWhile(remaining => remaining >= 0)
        )
      )
    ).subscribe(this.secondsLeft$);
  }
}
