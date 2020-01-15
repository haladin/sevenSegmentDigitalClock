
# SevenSegmentClock

Digital clock with seven segment digits.

## Build:

    git clone https://github.com/haladin/sevenSegmentDigitalClock
    cd sevenSegmentDigitalClock
    sudo npm install -g @angular/cli
	npm install
	ng build seven-segment-clock-lib

## Running demo application:

    ng serve clock-demo

## Test
    
    ng test

## Usage

```HTML
    <lib-display [config]="clockConfig"></lib-display>
```

## Clock configuration:

-   h : Formats the hours field in 12-hours format without leading zero (1..12).
-   hh: Formats the hours field in 12-hours format with leading zero (01..12).
-   H : Formats the hours field in 24-hours format without leading zero (0..23).
-   HH: Formats the hours field in 24-hours format with leading zero (00..23).
-   m : Formats the minutes field without leading zero (0..59).
-   mm: Formats the minutes field with leading zero (00..59).
-   s : Formats the seconds field without leading zero (0..59).
-   ss: Formats the seconds field with leading zero (00..59).
-   tt: Represents the AM/PM field. (Only applied when hours are set to h or hh)
