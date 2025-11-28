import { Component, input } from '@angular/core';
import { weekEntity } from '../../model/weekEntity';

@Component({
  selector: '[week-row]',
  imports: [],
  templateUrl: './week.html',
  styleUrl: './week.less',
  standalone: true
})
export class Week {
  public week = input.required<weekEntity>();
}
