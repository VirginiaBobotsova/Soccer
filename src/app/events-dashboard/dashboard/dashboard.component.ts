import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '@app/events-dashboard/state/category/category.model';
import { CategoryService } from '@app/events-dashboard/state/category/category.service';
import { CategoryQuery } from '@app/events-dashboard/state/category/category.query';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  categories$: Observable<Category[]>;
  selectLoading$: Observable<boolean>;
  categories: any[];

  constructor(private categoryService: CategoryService, private categoryQuery: CategoryQuery) {}

  ngOnInit() {
    this.categoryService.getEventsByCategory();
    this.categories$ = this.categoryQuery.selectAll();
    this.selectLoading$ = this.categoryQuery.selectLoading();
  }
}
