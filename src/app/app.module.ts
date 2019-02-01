import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableComponent } from './table.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    TableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TableComponent]
})
export class AppModule { }
