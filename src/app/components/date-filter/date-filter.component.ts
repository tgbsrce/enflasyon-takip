import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateParams } from 'src/app/models/filters.model';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css'],
})
export class DateFilterComponent implements OnInit {
  @Input() value: DateParams | undefined;
  dateRangeForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  @Output() DateChildEvent = new EventEmitter<DateParams>();
  constructor() {}

  ngOnInit(): void {
    this.value && this.dateRangeForm.patchValue(this.value);
    this.dateRangeForm.valueChanges.subscribe((date) => {
      if (date.start && date.end) {
        this.DateChildEvent.emit(date as DateParams);
      }
    });
  }
}
