import { ID, guid } from '@datorama/akita';

export interface Line {
  id: ID;
  lineId: string;
  marketId: string;
  outcomeType: number;
  price: number;
  oldPrice?: number;
  points?: number;
  isMain: boolean;
  isUpdated: boolean;
  isVisible: boolean;
  isSuspended: boolean;
}

export function createLine({
    id = '',
    lineId = '',
    marketId = '',
    outcomeType = 0,
    price = 0,
    oldPrice = 0,
    points = 0,
    isMain = false,
    isUpdated = false,
    isVisible = true,
    isSuspended = false
}: Partial<Line>): Line {
  return {
    id,
    lineId,
    marketId,
    outcomeType,
    price,
    oldPrice,
    points,
    isMain,
    isUpdated,
    isVisible,
    isSuspended
  };
}
