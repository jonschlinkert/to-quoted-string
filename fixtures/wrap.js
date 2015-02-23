(function (root, <%= name %>) {
  /* istanbul ignore else */
  if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    // Node.
    module.exports = <%= name %>();
  } else if (typeof define === 'function' && define.amd) {
    // AMD, registers as an anonymous module.
    define(function () {
      return <%= name %>();
    });
  } else {
    // Browser global.
    root.<%= name %> = <%= name %>();
  }
})(this, function () {

<%= fn.body %>

  return <%= name %>;
});