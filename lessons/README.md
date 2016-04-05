# Lesson 10
---

## Sunday continuation of Project 1

### Topics covered in class on Sunday

##### d3 & js related
```js

// function to help us sort through the dates
function sortByDates(a, b) {
  return a.date - b.date; // dates convert to number so subtraction gives us the sort method
}

// grouping data and working with it
d3.nest() // allows us to group data
    .key( function(d) {return d./* key */}) // the key you want to group by
    .sortKeys(d3.ascending) // can sort here as well
    .rollup(function(values) { // rollup allows us to run function on each "leaf" element
      return d3.sum(values,  function(d) { // values are the leaf elements here
        return d./* some value you want to work with */;
      })
    })
    .entries(/* array */); // this applies the nest operator to the array of data

```