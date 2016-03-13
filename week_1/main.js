var legislator = {
  name: 'Ron Wyden',
  sectors: [
    {
    money_from_pacs: 589360,
    money_from_indivs: 1109475,
    sector_name: 'Finance/Insur/RealEst'
    },
    {
    money_from_pacs: 782240,
    money_from_indivs: 479476,
    sector_name: 'Health'
    },
    {
    money_from_pacs: 184676,
    money_from_indivs: 638566,
    sector_name: 'Lawyers & Lobbyists'
    },
    {
    money_from_pacs: 104350,
    money_from_indivs: 71799,
    sector_name: 'Transportation'
    }
  ]
}

var h = 250; // set vars for h & w
var w = 600;
var yScale = d3.scale.linear()
.domain([0,900000]) // domain a little higher than max value
.range([0,h]) // set yScale linear
var dataSet = legislator.sectors.map(function(item){
    return item.money_from_pacs
  }) // use map to get a new dataset

var svg = d3.select('#barChart').append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll('rect') // using svg variable reference
  .data(dataSet)
  .enter() // starting d3
  .append('rect') // creating a rect this time
  .attr('class', 'bar') // assigning class
  .attr('x', function(data, index) {
    return index * 20
  })
  .attr('y', function(data) {
    return h - yScale(data) // using yScale on data
  })
  .attr('width', 15)
  .style('height', function(data) {
    return yScale(data) // using yScale on data
  })

