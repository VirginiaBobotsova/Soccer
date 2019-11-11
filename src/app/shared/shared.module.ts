import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { SortPipe } from './pipes/sort.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { ReversePointsPipe } from './pipes/reverse-points.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, SortPipe, CustomDatePipe, ReversePointsPipe],
  exports: [LoaderComponent, SortPipe, CustomDatePipe, ReversePointsPipe],
  providers: [ReversePointsPipe]
})
export class SharedModule {}
