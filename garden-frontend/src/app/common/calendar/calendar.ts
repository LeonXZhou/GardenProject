import { Component, input, OnInit, signal } from '@angular/core';
import { dayEntity, daysOfTheWeek } from './model/dayEntity';

@Component({
  selector: 'calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.less',
  standalone: true
})
export class Calendar implements OnInit {
  public initialDate = input.required<Date>();


  public selectedDate = signal<Date>(new Date());
  public numOfDaysInCurrentMonth = signal<number>(0);
  public dayEntities = signal<Array<dayEntity>>([]);


  public ngOnInit(): void {
    this.selectedDate.set(new Date(this.initialDate()));

    this.numOfDaysInCurrentMonth
      .set(this.getDaysInMonth(this.selectedDate().getFullYear(), this.selectedDate().getMonth()+1));

    const dayElementsToRender: Array<dayEntity>= [];
    for (let date = 1; date <= this.numOfDaysInCurrentMonth(); date++) {
      const dateObject = new Date(this.selectedDate().getFullYear(), this.selectedDate().getMonth()+1, date);
      dayElementsToRender.push({dayOfMonth: date, dayOfWeek: this.getDayOfTheWeekEnum(dateObject.getDay())});
    }

    this.dayEntities.set(dayElementsToRender);
  }

  private getDayOfTheWeekEnum(dayNum: number): daysOfTheWeek | null {
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

    return null;
  }

  private getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }
}
