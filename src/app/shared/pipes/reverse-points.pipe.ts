import { Pipe, PipeTransform } from '@angular/core';
import { Line, createLine } from '@app/events-dashboard/state/line/line.model';

@Pipe({
  name: 'reversePoints'
})
export class ReversePointsPipe implements PipeTransform {
  transform(value: Line[], marketType: number): any {
    if (value && marketType === 2) {
        const newLines: Line[] = [];
        const homeLine = value.filter((line: Line) => line.outcomeType === 1)[0];
        const awayLine = value.filter((line: Line) => line.outcomeType === 2)[0];
        let reversedPoints = 0;

        if (Math.sign(homeLine.points) === -1 || Math.sign(homeLine.points) === -0) {
            reversedPoints = Math.abs(awayLine.points);
        } else {
            reversedPoints = -Math.abs(awayLine.points);
        }

        const newAwayLine = createLine({
                id: awayLine.id,
                lineId: awayLine.lineId,
                marketId: awayLine.marketId,
                outcomeType: 2,
                price: awayLine.price,
                oldPrice: awayLine.oldPrice,
                points: reversedPoints,
                isMain: awayLine.isMain,
                isUpdated: awayLine.isUpdated,
                isVisible: awayLine.isVisible,
                isSuspended: awayLine.isSuspended
        });

        newLines.push(homeLine);
        newLines.push(newAwayLine);

        return newLines;
    } else {
        return value;
    }
  }
}
