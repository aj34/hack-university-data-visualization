var dataSet = [10, 20, 15, 30, 40, 55, 30, 50, 60];

var svg = d3.select('#barChart').append('svg')
  .attr('width', 600)
  .attr('height', 250);

svg.selectAll('rect') // using svg variable reference
  .data(dataSet)
  .enter() // starting d3
  .append('rect') // creating a rect this time
  .attr('class', 'bar') // assigning class
  .attr('x', function(data, index) {
    return index * 20
  })
  .attr('y', function(data) {
    return 250 - data
  })
  .attr('width', 15)
  .style('height', function(data) {
    return data // returning data for height value; Note no px is needed with svg
  })