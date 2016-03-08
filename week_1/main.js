var data = [ 100, 200, 150, 300, 400, 600 ];

  d3.select('body').selectAll('div')
    .data(data)
    .enter() // starting d3
    .append('div') // creating a div
    .attr('class', 'bar') // assigning class
    .style('height', function (data) {
      return data + 'px'; // returning data with px appended
    });