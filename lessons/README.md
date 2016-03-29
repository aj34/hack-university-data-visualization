# Lesson 9 and Project 1
---

## Line charts

### Topics covered in class

##### d3 & js related
```js
// promises
var promise = new Promise(function(resolve, reject){
  /* something asynchronous */
  resolve(/* something from asynchronous code to return */)

  if(/* something bad happened */){
    reject(/* the bad */)
  }
});

// ways to get data from files or online
d3.json == $.getJSON
d3.csv

d3.time.scale()
d3.extent(/* an array */)
d3.svg.line() // d3 has layouts and this is one for line charts

.interpolate(/* we used basis */) // there's a lot more to it.. Read more at https://github.com/d3/d3-interpolate

```
## Project 1
---

##### Requirements
* [ ] Use the included current_candidate_transactions_in endpoint
* [ ] Line chart representation of money (y) over time (x)
* [ ] A function that changes the visualization to a different candidate's data

Continue working with the code where we are at so far or restart if you wish. Feel free to collaborate on slack, and use github to share your code and work on finishing this visualization.

We have a line visual now but does it make sense?

1. What's the underlying problem here? (*hint* Veronica mentioned this...)
2. How can we solve that?

You have all the tools required for this. I look forward to seeing how you approach this!
