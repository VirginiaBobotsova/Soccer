import { ID, guid } from '@datorama/akita';
import { SoccerEvent } from '@app/events-dashboard/state/event/event.model';

export interface Category {
  id: ID;
  categoryName: string;
  categoryRank: number;
  leagueName: string;
  leagueRank: number;
  events: SoccerEvent[];
}

export function createCategory({
  categoryName = '',
  categoryRank = 0,
  leagueName = '',
  leagueRank = 0,
  events = []
}: Partial<Category>): Category {
  return {
    id: guid(),
    categoryName,
    categoryRank,
    leagueName,
    leagueRank,
    events
  };
}
