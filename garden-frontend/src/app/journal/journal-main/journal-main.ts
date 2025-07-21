import { Component, signal } from '@angular/core';
import { Calendar } from '../calendar/calendar';

@Component({
  selector: 'journal-main',
  imports: [Calendar],
  templateUrl: './journal-main.html',
  styleUrl: './journal-main.less',
  standalone: true
})
export class JournalMain {
  public date = signal('febuary rules')
}
