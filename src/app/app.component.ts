import { Component } from '@angular/core';
import {CountdownComponent} from './countdown/countdown.component';

@Component({
  selector: 'app-root',
  imports: [CountdownComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'countdown';
}
