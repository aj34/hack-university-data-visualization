# Lesson 4
---
### Scaling: Part 2

#### Covered methods
```js
d3.max(/*...*/)

// using color
d3.scale.linear() // linear : min / max
  .domain([0,d3.max(dataSet)]) // ex for data based
  .domain([0,dataSet.length]) // ex for position based
  // range can be spectrum
  .range(['tomato','cornflowerBlue'])

d3.scale.quantile() // quantile allows us to distribute based on domain
d3.scale.quantize() // quantize allows us to distribute based on range
```
