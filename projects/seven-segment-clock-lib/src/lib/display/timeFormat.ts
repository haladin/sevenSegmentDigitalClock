import { SegmentData } from '../two-digit-segment/segmentData';

export class TimeFormat {

    private hoursFormat: Hours = Hours.NOT_SET;
    private minutesFormat: Minutes = Minutes.NOT_SET;
    private secondsFormat: Seconds = Seconds.NOT_SET;
    private amPmFormat: Am_Pm = Am_Pm.NOT_SET;

    constructor(config: string) {
        if (config) {
            const hCount = (config.match(/h/g) || []).length;
            const HCount = (config.match(/H/g) || []).length;
            const mCount = (config.match(/m/g) || []).length;
            const tCount = (config.match(/t/g) || []).length;
            const sCount = (config.match(/s/g) || []).length;

            const sumAll = hCount + HCount + mCount + tCount + sCount;

            if ((hCount > 0 && HCount > 0) || (sumAll < config.length)) {
                console.error('Inavlid format. Check usage.');
            } else {
                switch (hCount) {
                    case 1:
                        this.hoursFormat = Hours.h;
                        break;
                    case 2:
                        this.hoursFormat = Hours.hh;
                        break;
                }
                switch (HCount) {
                    case 1:
                        this.hoursFormat = Hours.H;
                        break;
                    case 2:
                        this.hoursFormat = Hours.HH;
                        break;
                }
                switch (mCount) {
                    case 1:
                        this.minutesFormat = Minutes.m;
                        break;
                    case 2:
                        this.minutesFormat = Minutes.mm;
                        break;
                }
                switch (sCount) {
                    case 1:
                        this.secondsFormat = Seconds.s;
                        break;
                    case 2:
                        this.secondsFormat = Seconds.ss;
                        break;
                }
                switch (tCount) {
                    case 2:
                        this.amPmFormat = HCount ? Am_Pm.NOT_SET : Am_Pm.tt;
                        break;
                }
            }
        }
    }

    public GetHours(hours: number): SegmentData {
        let hoursOne = -1;
        let hoursTwo = -1;

        switch (this.hoursFormat) {
            case Hours.h:
                hours = hours % 12;
                hoursOne = Math.floor(hours / 10);
                hoursTwo = hours % 10;
                if (hoursOne === 0) {
                    if (hoursTwo === 0) {
                        hoursOne = 1;
                        hoursTwo = 2;
                    } else {
                        hoursOne = -1;
                    }
                }
                break;
            case Hours.hh:
                hours = hours % 12;
                hoursOne = Math.floor(hours / 10);
                hoursTwo = hours % 10;
                if (hoursOne === 0 && hoursTwo === 0) {
                    hoursOne = 1;
                    hoursTwo = 2;
                }
                break;
            case Hours.H:
                hoursOne = Math.floor(hours / 10);
                hoursTwo = hours % 10;
                if (hoursOne === 0) {
                    hoursOne = -1;
                }
                break;
            case Hours.HH:
            default:
                hoursOne = Math.floor(hours / 10);
                hoursTwo = hours % 10;
                break;
        }

        return {
            firstNumber: hoursOne,
            secondNumber: hoursTwo
          };
    }

    public GetMinutes(minutes: number): SegmentData {
        let minutesOne = Math.floor(minutes / 10);
        const minutesTwo = minutes % 10;

        switch (this.minutesFormat) {
            case Minutes.m:
                if (minutesOne === 0) {
                    minutesOne = -1;
                }
                break;
            case Minutes.mm:
            default:
                break;
        }

        return {
            firstNumber: minutesOne,
            secondNumber: minutesTwo
          };
    }

    public GetSeconds(seconds: number): SegmentData {
        let secondsOne = Math.floor(seconds / 10);
        const secondsTwo = seconds % 10;

        switch (this.secondsFormat) {
            case Seconds.s:
                if (secondsOne === 0) {
                    secondsOne = -1;
                }
                break;
            case Seconds.ss:
            default:
                break;
        }

        return {
            firstNumber: secondsOne,
            secondNumber: secondsTwo
          };
    }

    public GetAmPm(hours: number): any {
        let digit = 'off';
        switch (this.amPmFormat) {
            case Am_Pm.tt:
                if (hours > 12) {
                    digit = 'pm';
                } else {
                    digit = 'am';
                }
                break;
        }

        return {digit};
    }
}

export enum Hours {
    NOT_SET = 0,
    h = 1,
    hh = 2,
    H = 3,
    HH = 4
}

export enum Minutes {
    NOT_SET = 0,
    m = 1,
    mm = 2
}

export enum Seconds {
    NOT_SET = 0,
    s = 1,
    ss = 2
}

export enum Am_Pm {
    NOT_SET = 1,
    tt = 2
}
