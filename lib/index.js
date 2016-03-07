/*
 * biojs-vis-example
 * https://github.com/4ndr01d3/biojs-vis-example
 *
 * Copyright (c) 2016 gsalazar
 * Licensed under the Apache-2.0 license.
 */

/**
@class biojsvisexample
 */


var  biojsvisexample;
var example = require("./example.js");
module.exports = biojsvisexample = function(opts){
  this.el = opts.el;
  this.el.textContent = biojsvisexample.hello(opts.text);
  this.el.setAttribute("class", "header");
  console.log(example);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojsvisexample.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojsvisexample.hello = function (name) {

  return 'hello ' + name;
};

