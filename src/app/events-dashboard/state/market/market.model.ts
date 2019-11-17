import { ID } from '@datorama/akita';
import { Line } from '@app/events-dashboard/state/line/line.model';

export interface Market {
  id: ID;
  generalMarketType: number;
  periodType: 1;
  periodNumber: null;
  lines: Line[];
  eventId: string;
}
