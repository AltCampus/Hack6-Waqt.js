# Implement moment.js
Functions to implement using Date Object.

## Get Date Time
1. now
It will give you the current datetime
Example:
```js
now();
// Wed Feb 13 2019 14:30:02 GMT+0530 (India Standard Time)
```

2. Day of Year
Gets the day of the year.
```js
getDayOfYear(new Date());
// 44
```

3. Day of Week
Gets the day of the week.
```js
getDay(new Date());
// 7
```

4. Week of Year
Gets the day of the week.
```js
getWeek(new Date());
// 3 (Wednesday)
```
5. Days in Month
Gets the day of the week.
```js
getDaysInMonth(new Date(2012, 1));
// => 29
```
6. Maximum of the given dates
Returns the minimum (most distant future) of the given date.
```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9),
];
min(array);
// => "2016-01-08T13:00:00.000Z"
```
7. Maximum of the given dates
Returns the maximum (most distant future) of the given date.
```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9),
];
max(array);
// => "2018-03-11T13:00:00.000Z"
```


## Date Manipulation

## Add Days
Add the specified number of days to the given date.
Example:
```js
addDays(new Date(), 7);
//Output:  Wed Feb 20 2019 14:30:02 GMT+0530 (India Standard Time)
```

## Subtract Days

Subtract the specified number of days from the given date.
Example:
```js
subDays(new Date(), 5);
//Output:  Wed Feb 20 2019 14:30:02 GMT+0530 (India Standard Time)
```
## End of Time
Return the end of a unit of time for the given date.

Example:
```js
endOfDay(new Date());
// => "2018-09-09T13:59:59.999Z"
```
