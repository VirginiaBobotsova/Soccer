import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: Observable<any[]>, ...args: any[]): any {
    const sorted = value.pipe(
      map(items =>
        items
          .sort(this.sortByCategoryRank)
          .sort(this.sortByLeagueRank)
          .sort(this.sortByDate)
      )
    );

    return sorted;
  }

  private sortByCategoryRank(a: any, b: any) {
    if (a.categoryRank > b.categoryRank) {
      return -1;
    }

    if (a.categoryRank < b.categoryRank) {
      return 1;
    }

    return 0;
  }

  private sortByLeagueRank(a: any, b: any) {
    if (a.categoryName === b.categoryName && a.leagueRank > b.leagueRank) {
      return -1;
    }

    if (a.categoryName === b.categoryName && a.leagueRank < b.leagueRank) {
      return 1;
    }

    return 0;
  }

  private sortByDate(a: any, b: any) {
    if (a.categoryName === b.categoryName && a.leagueRank === b.leagueRank && a.startTime < b.startTime) {
      return -1;
    }

    if (a.categoryName === b.categoryName && a.leagueRank === b.leagueRank && a.startTime > b.startTime) {
      return 1;
    }

    return 0;
  }
}
