import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '@app/events-dashboard/state/category/category.model';
import { CategoryService } from '@app/events-dashboard/state/category/category.service';
import { CategoryQuery } from '@app/events-dashboard/state/category/category.query';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    categories$: Observable<Category[]>;
    selectLoading$: Observable<boolean>;

    constructor(
        private _categoryService: CategoryService,
        private _categoryQuery: CategoryQuery,
        ) {}

    ngOnInit() {
        this._categoryService.getEventsByCategory();
        this.categories$ = this._categoryQuery.selectAll();
        this.selectLoading$ = this._categoryQuery.selectLoading();
    }
}
