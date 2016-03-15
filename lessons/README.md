# Lesson 5

--------------------------------------------------------------------------------

## Scatterplots / BubbleCharts
### Using underscore for random data

```js
var dataset = _.map(_.range(/* number of random data points */), function (i) {
  return {
    x: /* can use Math.random to generate a value here like below */,
    y: /* Math.random() * x where x = range of the number */,
    radius: /* can be static or random number like above */
  };
}); // using underscore for random data for now
```

### Topics covered

```js
// defining margin values
var margin = {top: 0, right: 0, bottom: 0, left: 0};

// defining width and height with margin values
var width = 600 - margin.left - margin.right;
var height = 250 - margin.top - margin.bottom;

// appending g
.append('g')

// transforming the x,y values of circles
.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
```
