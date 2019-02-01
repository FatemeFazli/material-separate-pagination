import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  title = 'material-separate-pagination';
  // MatPaginator Inputs
  @Input('length') length: number;
  @Input('pageSize') pageSize: number;
  @Input('pageSizeOptions') pageSizeOptions: number[];

  @Output('page') page: EventEmitter<PageEvent> = new EventEmitter();

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  setPage(event) {
    this.page.emit(event);
  }
}
