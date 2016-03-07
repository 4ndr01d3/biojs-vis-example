var d3 = require("d3");

var getBases = function(sequence) {
  var s = sequence.toUpperCase();
  var bases = {};
  for (var i =0;i<s.length;i++){
    if (typeof bases[s[i]] == "undefined")
      bases[s[i]] = 1;
    else
      bases[s[i]]++; 
  }
  return bases;
}

var Barchart = function(opts) {
  var container = opts.el,
    bases = getBases(opts.sequence),
    keys = d3.keys(bases),
    values = keys.map(function(e){return bases[e];});
  
  var x = d3.scale.linear()
    .domain([0, d3.max(values)])
    .range([0, 420]);
  
  d3.select(container)
    .attr("class", "chart")
    .selectAll("div")
    .data(keys)
    .enter().append("div")
      .style("width", function(d) { return x(bases[d]) + "px"; })
      .text(function(d) { return bases[d]+":"+d; });
}

module.exports = Barchart;