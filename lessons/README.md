# Lesson 8
---

## On events with transitions / Starting Time for time scales

### Topics covered

##### d3 transitions and events related
```js
// .axis() method
  .transition(/* start animated transition */)
  .delay(/* milliseconds */)
  .duration(/* milliseconds */)
  .ease(/* eg: in, out, in-out, out-in, elastic, bounce */)
  .attr(/* change an attribute with a callback and datum */)
  .style(/* change style - mind where it happens */);

// on events are familiar from native javascript and jQuery
  .on('mouseover', callback(){
    /* do stuff here when you hover  */
  })
// some more events: mouseup, mouseout, mousedown, keydown, keyup..

// handy d3 function to toggle a class
d3.select(this).classed(/* className */, true|false);
```
##### d3 time formatting
```js
// formatting time in d3 from available data
d3.time.format(/* specify the format, eg: %Y/%m/%d */)

var newDate = '2016-03-13'
let formattedDate = d3.time.format('%Y-%m-%d').parse(newDate);
// newDate is Date object == Sun Mar 13 2016 00:00:00 GMT-0800 (PST)
```