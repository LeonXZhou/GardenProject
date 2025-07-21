import { Component, input } from '@angular/core';
@Component({
  selector: 'calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.less',
  standalone: true
})
export class Calendar {
    public date = input.required<string>();
}
