var legislator = {
  name: 'Ron Wyden',
  sectors: [{
    money_from_pacs: 589360,
    money_from_indivs: 1109475,
    sector_name: 'Finance/Insur/RealEst'
  }, {
    money_from_pacs: 782240,
    money_from_indivs: 479476,
    sector_name: 'Health'
  }, {
    money_from_pacs: 184676,
    money_from_indivs: 638566,
    sector_name: 'Lawyers & Lobbyists'
  }, {
    money_from_pacs: 104350,
    money_from_indivs: 71799,
    sector_name: 'Transportation'
  }]
}
var dataSet = legislator.sectors.map(function(item) {
    return item.money_from_pacs
  }) // use map to get a new dataset

var height = 250; // set vars for height & width
var width = 600;

var yScale = d3.scale.linear()
  .domain([0, d3.max(dataSet)*1.1]) // domain now with d3.max
  .range([0, height]) // set yScale linear
var xScale = d3.scale.ordinal() // orders
  .domain(dataSet)
  .rangeBands([0, width], 0.25, 0.25); // (width of data), padding between, padding outside

  var colorScale = d3.scale.linear() // linear - min / max
  //.domain([0,d3.max(dataSet)]) // for data based
  .domain([0,dataSet.length]) // for position based
  .range(['tomato','cornflowerBlue'])

var svg = d3.select('#barChart').append('svg')
  .attr('width', width)
  .attr('height', height)

svg.selectAll('rect')
  .data(dataSet)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', function(data, index) {
    return xScale(data) // using xScale on data
  })
  .attr('y', function(data) {
    return height - yScale(data) // using yScale on data
  })
  .attr('width', xScale.rangeBand) // width determined by xScale.rangeBand
  .style('height', function(data) {
    return yScale(data) // height determined by yScale
  })
  .attr('fill', function(data,i) {
   // return colorScale(data) // for data based
    return colorScale(i) // for position based
  })