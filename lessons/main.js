var margin = {
  top: 20,
  right: 50,
  bottom: 30,
  left: 70
}

var width = 800 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var filerId = 13920;

var url = 'http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/' + filerId + '/';

d3.json(url, function(json) {
  var data = json;
  var parseDate = d3.time.format('%Y-%m-%d').parse;
  var dataSet = data.map(function(item) {
    return {
      date: parseDate(item.tran_date),
      amount: item.amount
    }
  })

  // function to help us sort through the dates
  function sortByDates(a, b) {
    return a.date - b.date; // dates convert to number so subtraction gives us the sort method
  }

  var dates = _.map(dataSet, 'date');
  var amounts = _.map(dataSet, 'amount');

  // defining the x and y values
  var x = d3.time.scale() // determined through d3.time.scale function
    .domain(d3.extent(dates)) // using the extent method on dates array
    .range([0, width]);
  var y = d3.scale.linear()
    .domain(d3.extent(amounts))
    .range([height, 0]);

  // sort data here
  dataSet.sort(sortByDates);

  // defining axes
  var xAxis = d3.svg.axis().scale(x)
    .orient('bottom').ticks(6);
  var yAxis = d3.svg.axis().scale(y)
    .orient('left').ticks(10);

  // we attach the svg to the html here
  var svg = d3.select('#content').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  // defining path function to draw the line
  var path = d3.svg.line()
    .x(function(d) {
      return x(d.date)
    })
    .y(function(d) {
      return y(d.amount)
    })
    .interpolate('basis')

  // now we append the path to the svg - note the 2 different options
  svg.append('path')
    .attr('class', 'line')
    .attr('d', path(dataSet))

  // towards the end of the code we add the axes
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
})