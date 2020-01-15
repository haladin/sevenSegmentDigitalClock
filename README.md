
# SevenSegmentClock

Digital clock with seven segment digits.

## Build:

```bash
git clone https://github.com/haladin/sevenSegmentDigitalClock
cd sevenSegmentDigitalClock
sudo npm install -g @angular/cli
npm install
ng build seven-segment-clock-lib
```

## Test
    
`ng test`

## Usage

```html
<lib-display [config]="clockConfig"></lib-display>
```

## Running demo application:

`ng serve clock-demo`

## Building web component

`npm run buildweb`

## Web component Usage:

Copy `custom-clock-element.js` from `./dist/clock-web-component` and include it in your html.

Example:
```html
<!DOCTYPE html>
<html>
    <head>
        <script src="./custom-clock-element.js"/>
        <style>
            .clock {
                width: 450px;
            }
        </style>
    </head>
    <body style="background-color: black;">
        <div class="container clock">
            <app-display  config="HHmmss"/>
        </div>
    </body>
</html>
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
