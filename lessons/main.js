var margin = {
  top: 20,
  right: 50,
  bottom: 30,
  left: 70
}

var width = 800 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

// function to help us sort through the dates
function sortByDates(a, b) {
  a = new Date(a);
  b = new Date(b);
  return a < b ? -1 : a > b ? 1 : 0;
}

// we attach the svg to the html here
var svg = d3.select('#content').append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

function getFilerURL(filerId) {
  return 'http://54.213.83.132/hackoregon/http/current_candidate_transactions_out/' + filerId + '/';
}

function getTotalStateURL() {
  return 'http://54.213.83.132/hackoregon/http/state_sum_by_date/_/';
}

function changeOption(filerId, firstTime) {
  var url;
  if (filerId === "state") {
    url = getTotalStateURL();
  } else {
    url = getFilerURL(filerId)
  }

  d3.json(url, function(json) {
    var data = json;
    var parseDate = d3.time.format('%Y-%m-%d').parse;
    var dataSet = data.map(function (item) {
      return {
        date: d3.time.month(parseDate(item.tran_date)),
        amount: (filerId === 'state') ? item.total_out : item.amount
      }
    })

    var nestedDataSet = d3.nest()
      .key(function (d) {
        return d.date;
      })
      .sortKeys(sortByDates)
      .rollup(function (v) {
        return {
          amount: d3.sum(v, function (d) {
            return d.amount;
          })
        };
      })
      .entries(dataSet);

    var dates = _.map(nestedDataSet, function (value) {
      return new Date(value.key)
    });
    var amounts = _.map(nestedDataSet, function (value) {
      return value.values.amount
    });

    // defining the x and y values
    var x = d3.time.scale() // determined through d3.time.scale function
      .domain(d3.extent(dates)) // using the extent method on dates array
      .range([0, width]);
    var y = d3.scale.linear()
      .domain(d3.extent(amounts))
      .range([height, 0]);

    // defining axes
    var xAxis = d3.svg.axis().scale(x)
      .orient('bottom').ticks(6);
    var yAxis = d3.svg.axis().scale(y)
      .orient('left').ticks(10);

    // defining path function to draw the line
    var path = d3.svg.line()
      .x(function (d) {
        return x(new Date(d.key))
      })
      .y(function (d) {
        return y(d.values.amount)
      })
      .interpolate('basis')

    if (firstTime) {
      // now we append the path to the svg - note the 2 different options
      svg.append('path')
        .attr('class', 'line')
        .attr('d', path(nestedDataSet))

      // towards the end of the code we add the axes
      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    } else {
      // Make the changes
      svg.select(".line")   // change the line
        .transition() //
        .duration(500)
        .attr("d", path(nestedDataSet));
      svg.select(".x.axis") // change the x axis
        .call(xAxis);
      svg.select(".y.axis") // change the y axis
        .call(yAxis);
    }
  })
}

changeOption('state', true)