var dataset = _.map(_.range(25), function(i) {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
    radius: Math.random() * 20
  };
}); // using underscore for random data for now

var margin = {top: 20, right: 20, bottom: 60, left: 40};

var width = 600 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

var svg = d3.select('#scatterChart').append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')'); // transform the x,y value with translate

var yScale = d3.scale.linear()
  .domain([0, d3.max(dataset, function(data) {
    return data.y;
  })])
  .range([height, 0]);

var xScale = d3.scale.linear()
  .domain([0, 100])
  .range([0, width]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom')
    .ticks(10)
    .innerTickSize(10)
    .outerTickSize(10)
    .tickPadding(10);

svg.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0, '+ (height + 10) + ')') // moved to height + 10 pixels
  .call(xAxis);

  var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient('left')
  .ticks(5)
  .innerTickSize(10)
  .outerTickSize(2)
  .tickPadding(10);

  svg.append('g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(0, '+ 10 + ')') // moved to height + 10 pixels
    .call(yAxis);

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle') // creating circles
  .attr('class', 'bubble')
  .attr('cx', function(data) { // determining the center point x value
    return xScale(data.x);
  })
  .attr('cy', function(data) { // determining the center point y value
    return yScale(data.y);
  })
  .attr('r', function(data) { // determining the radius of the circle
    return data.radius;
  });