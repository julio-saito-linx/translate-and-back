var Backbone = require('backbone');
var TransResult = require('./transResult');


module.exports = Backbone.Collection.extend({
    model: TransResult,
    url: '/api/translate'
});
