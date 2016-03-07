var d3 = require("d3");

var Barchart = function(opts) {
  var container = opts.el;

  d3.select(container)
    .attr("class", "header")
    .text("Space for a barchart with D3!");
}

module.exports = Barchart;