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
  var container = opts.el;
  var bases = getBases(opts.sequence);

  d3.select(container)
    .attr("class", "header")
    .text("Bases:")
    .selectAll("p")
    .data(d3.keys(bases)).enter()
    .append("p")
      .text(function(d){ return d +": "+bases[d]; });
}

module.exports = Barchart;