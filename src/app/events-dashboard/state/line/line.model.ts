import { ID, guid } from '@datorama/akita';

export interface Line {
    id: ID;
    outcomeType: number;
    price: number;
    points?: number;
    isVisible: boolean;
    isSuspended: boolean;
}

export function createLine({
    outcomeType = 0,
    price = 0,
    points = 0,
    isVisible = true,
    isSuspended = false,
}: Partial<Line>): Line {
    return {
        id: guid(),
        outcomeType,
        price,
        points,
        isVisible,
        isSuspended
    };
}