import { ID } from '@datorama/akita';
import { Market } from '@app/events-dashboard/state/market/market.model';

export interface SoccerEvent {
    id: ID;
    categoryName: string;
    categoryRank: number;
    leagueName: string;
    leagueRank: number;
    homeTeamName: string;
    awayTeamName: string;
    startTime: Date;
    isSuspended: boolean;
    isVisible: boolean;
    isLive: boolean;
    previewMarkets: Market[];
}