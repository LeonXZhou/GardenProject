import { Component, input, OnInit, signal } from '@angular/core';

import { dayEntity, daysOfTheWeek, daysOfTheWeekString } from './model/dayEntity';
import { weekEntity } from './model/weekEntity';
import { Week } from './components/week/week';

@Component({
  selector: 'calendar',
  imports: [Week],
  templateUrl: './calendar.html',
  styleUrl: './calendar.less',
  standalone: true
})
export class Calendar implements OnInit {
  public initialDate = input.required<Date>();


  public selectedDate = signal<Date>(new Date());
  public numOfDaysInCurrentMonth = signal<number>(0);
  public dayEntities = signal<Array<dayEntity>>([]);
  public weekEntities = signal<Array<weekEntity>>([]);

  public ngOnInit(): void {
    this.selectedDate.set(new Date(this.initialDate()));
    this.generateDaysInAMonth();
    this.groupDaysIntoWeekEntities();
  }

  private generateDaysInAMonth() {
    this.numOfDaysInCurrentMonth
      .set(this.getDaysInMonth(this.selectedDate().getFullYear(), this.selectedDate().getMonth() + 1));

    const daysOfTheMonth: Array<dayEntity> = [];
    for (let date = 1; date <= this.numOfDaysInCurrentMonth(); date++) {
      const dateObject = new Date(this.selectedDate().getFullYear(), this.selectedDate().getMonth(), date);
      daysOfTheMonth.push({ dayOfMonth: date, dayOfWeek: this.getDayOfTheWeekEnum(dateObject.getDay()), dayOfWeekString: daysOfTheWeekString[this.getDayOfTheWeekEnum(dateObject.getDay())], renderId: date});
    }

    this.dayEntities.set(daysOfTheMonth);
  }

  private getDayOfTheWeekEnum(dayNum: number): daysOfTheWeek {
    switch (dayNum) {
      case 0:
        return daysOfTheWeek.Sunday;
      case 1:
        return daysOfTheWeek.Monday;
      case 2:
        return daysOfTheWeek.Tuesday;
      case 3:
        return daysOfTheWeek.Wednesday;
      case 4:
        return daysOfTheWeek.Thursday;
      case 5:
        return daysOfTheWeek.Friday;
      case 6:
        return daysOfTheWeek.Saturday;
    }

    return daysOfTheWeek.NotADate;
  }

  private getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  private groupDaysIntoWeekEntities() {
    const weeks: weekEntity[] = [];
    let currentWeek: Array<dayEntity> = [];

    let nullRenderId = -1;
    for (const day of this.dayEntities()) {
      // If currentWeek is empty, pad with nulls up to the current dayOfWeek
      if (currentWeek.length === 0 && day.dayOfWeek !== null) {
        const padCount = day.dayOfWeek;
        for (let i = 0; i < padCount; i++) {
          currentWeek.push({dayOfMonth: null, dayOfWeek: null, dayOfWeekString: null, renderId: nullRenderId});
          nullRenderId--;
        }
      }

      currentWeek.push(day);

      // If the week reaches 7 days, push and reset
      if (currentWeek.length === 7) {
        weeks.push({ days: currentWeek , weekOfTheMonth: weeks.length + 1});
        currentWeek = [];
      }
    }

    // Pad the final week if it's not full
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
          currentWeek.push({dayOfMonth: null, dayOfWeek: null, dayOfWeekString: null, renderId: nullRenderId});
          nullRenderId--;
      }
      weeks.push({ days: currentWeek, weekOfTheMonth: weeks.length + 1});
    }
    this.weekEntities.set(weeks);
  }
}
