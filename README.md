# Implement date-fns

Functions to implement using Date Object.

## Get Date Time

### now

It will give you the current datetime
Example:

```js
now();
// Wed Feb 13 2019 14:30:02 GMT+0530 (India Standard Time)
```

### Day of Year

Gets the day of the year.

```js
getDayOfYear(new Date());
// 44
```

### Day of Week

Gets the day of the week.

```js
getDay(new Date());
// 7
```

### Week of Year

Gets the day of the week.

```js
getWeek(new Date());
// 3 (Wednesday)
```

### Days in Month

Gets the day of the week.

```js
getDaysInMonth(new Date(2012, 1));
// => 29
```

### Maximum of the given dates

Returns the minimum (most distant future) of the given date.

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
min(array);
// => "2016-01-08T13:00:00.000Z"
```

### Maximum of the given dates

Returns the maximum (most distant future) of the given date.

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
max(array);
// => "2018-03-11T13:00:00.000Z"
```

## Display

### Format

Formats date to "MM/DD/YYYY"

```js
format(new Date(2014, 1, 11), "MM/DD/YYYY");
//=> '02/11/2014'
```

## Date Manipulation

### Add Days

Add the specified number of days to the given date.
Example:

```js
addDays(new Date(), 7);
//Output:  Wed Feb 20 2019 14:30:02 GMT+0530 (India Standard Time)
```

### Subtract Days

Subtract the specified number of days from the given date.
Example:

```js
subDays(new Date(), 5);
//Output:  Wed Feb 20 2019 14:30:02 GMT+0530 (India Standard Time)
```

### End of Time

Return the end of a unit of time for the given date.

Example:

```js
endOfDay(new Date());
// => "2018-09-09T13:59:59.999Z"
```

### Difference

Get the unit of time between the given dates.

Example:

```js
differenceInMilliseconds(new Date(2007, 0, 27), new Date(2007, 0, 29));
// => -172800000
differenceInDays(new Date(2007, 0, 27), new Date(2007, 0, 29));
// => -2
```

### Is Before

Check if a date is before another date.

Example:

```js
isBefore(new Date(2010, 9, 20), new Date(2010, 9, 21));
// => true
```

### Is Same

Check if a date is the same as another date.

Example:

```js
isSameDay(new Date(2010, 9, 20), new Date(2010, 9, 21));
// => false
isSameDay(new Date(2010, 9, 20), new Date(2010, 9, 20));
// => true
isSameMonth(new Date(2010, 9, 20), new Date(2010, 9, 21));
// => true
```

### Is After

Check if a date is after another date.

Example:

```js
isAfter(new Date(2010, 9, 20), new Date(2010, 9, 19));
// => true
```

### Is Leap Year

Check if a year is a leap year.

Example:

```js
isLeapYear(new Date(2000, 0, 1));
// => true
```

### Is a Date

Check if a variable is a native js Date object.

Example:

```js
isDate(new Date());
// => true
```
