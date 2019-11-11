import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '@app/events-dashboard/state/category/category.model';
import { CategoryQuery } from '@app/events-dashboard/state/category/category.query';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent implements OnInit {
    category$: Observable<Category>;
    categoryMarkets = ['1X2', 'HDP', 'O/U'];

    @Input()
    categoryId: string;

    constructor(
        private categoryQuery: CategoryQuery,
    ) { }

    ngOnInit() {
        this.category$ = this.categoryQuery.selectEntity((entity: Category)=> entity.id === this.categoryId);

    }
}
