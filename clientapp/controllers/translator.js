/*global $*/
'use strict';

module.exports = function () {
    this.callTranslate = function (text, from, to, cb) {
        $.ajax({
            type: 'GET',
            url: '/api/translate/' + text + '/' + from + '/' + to,
        })
        .done(function (result) {
            cb(result);
        }.bind(this));
    };
};
