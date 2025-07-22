import { Component, OnInit, signal } from '@angular/core';
import { Calendar } from '../../common/calendar/calendar';

@Component({
  selector: 'journal-main',
  imports: [Calendar],
  templateUrl: './journal-main.html',
  styleUrl: './journal-main.less',
  standalone: true
})
export class JournalMain implements OnInit {
  public date = signal(new Date());

  public ngOnInit(): void {

  }
}
