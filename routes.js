'use strict';
let employees = require('./employees');


module.exports = function(app) {
  app.use('/employees',employees );
};