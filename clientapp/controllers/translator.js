/*global $*/
'use strict';

var RSVP = require('rsvp');
RSVP.on('error', function (reason) {
    console.assert(false, reason);
});

module.exports = function () {

    this.callTranslate = function (text, from, to) {
        console.log('callTranslate:', text, from, to);
        
        var promise = new RSVP.Promise(function (resolve, reject) {
            var request = $.ajax({
                type: 'GET',
                url: '/api/translate/' + text + '/' + from + '/' + to,
            });

            request.done(function (result) {
                resolve(result);
            });

            request.fail(function (jqXHR, textStatus) {
                reject(jqXHR, textStatus);
            });
        });

        return promise;
    };
};
