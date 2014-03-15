'use strict';

var TransPackage = require('../clientapp/models/transPackage');

/*
    ======== A Handy Little Nodeunit Reference ========
    https://github.com/caolan/nodeunit

    Test methods:
        test.expect(numAssertions)
        test.done()
    Test assertions:
        test.ok(value, [message])
        test.equal(actual, expected, [message])
        test.notEqual(actual, expected, [message])
        test.deepEqual(actual, expected, [message])
        test.notDeepEqual(actual, expected, [message])
        test.strictEqual(actual, expected, [message])
        test.notStrictEqual(actual, expected, [message])
        test.throws(block, [error], [message])
        test.doesNotThrow(block, [error], [message])
        test.ifError(value)
*/


exports.transPackageValidation = {
    setUp: function (done) {
        // setup here
        done();
    },
    'starts with no results': function (test) {
        var transPackage = new TransPackage();
        test.equal(typeof transPackage, 'object', 'should be an object.');
        test.equal(transPackage.result, '', 'there is nothing yet');
        test.done();
    },
    'must have a sentence': function (test) {
        var transPackage = new TransPackage();
        transPackage.sentence = '';
        
        test.throws(function () {
            transPackage.validate();
        }, function (err) {
            if ((err instanceof Error) && /must have a sentence/.test(err)) {
                return true;
            }
        },
        'UNEXPECTED_NO_ERRORS');

        test.done();
    },

    'must have a langPath': function (test) {
        var transPackage = new TransPackage();
        transPackage.langPath = '';
        
        test.throws(function () {
            transPackage.validate();
        }, function (err) {
            if ((err instanceof Error) && /must have a langPath/.test(err)) {
                return true;
            }
        },
        'UNEXPECTED_NO_ERRORS');

        test.done();
    },

    'langPath must have at least 2 langs': function (test) {
        var transPackage = new TransPackage();
        transPackage.langPath = 'pt';
        
        test.throws(function () {
            transPackage.validate();
        }, function (err) {
            if ((err instanceof Error) && /must have at least two langs/.test(err)) {
                return true;
            }
        },
        'UNEXPECTED_NO_ERRORS');

        test.done();
    },

    'langPath cannot accept same consecutive lang': function (test) {
        var transPackage = new TransPackage();
        transPackage.langPath = 'pt,pt';
        
        test.throws(function () {
            transPackage.validate();
        }, function (err) {
            if ((err instanceof Error) && /cannot accept same consecutive lang/.test(err)) {
                return true;
            }
        },
        'UNEXPECTED_NO_ERRORS');

        test.done();
    },

    'langPath accepts different consecutive langs': function (test) {
        var transPackage = new TransPackage();
        transPackage.langPath = 'pt,en';
        
        test.doesNotThrow(function () {
            transPackage.validate();
        }, function (err) {
            if ((err instanceof Error) && /cannot accept same consecutive lang/.test(err)) {
                return true;
            }
        },
        'EXPECTED_NO_ERRORS');

        test.done();
    }

};
