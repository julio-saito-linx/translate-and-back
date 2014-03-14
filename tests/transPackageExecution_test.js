'use strict';

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

var TranslatorManager = require('../clientapp/models/translatorManager');
var TransPackage = require('../clientapp/models/transPackage');
var _ = require('underscore');

exports.transPackageValidation = {
    setUp: function (done) {
        // setup here
        done();
    },

    'start() returns a promise with an array of transResult': function (test) {
        var translatorManager = new TranslatorManager();

        var transPackage = new TransPackage();
        transPackage.sentence = 'Eu gosto de bananas';
        transPackage.langPath = 'pt,en';

        translatorManager.transPackage = transPackage;
        
        translatorManager.prepareResults().then(function (transResultArray) {
            test.ok(_.isArray(transResultArray), 'must be an array');
            test.equal(typeof transResultArray[0], 'object', 'first element is an object');
        });

        test.done();
    },

    'start() verifying transResultArray ': function (test) {
        var translatorManager = new TranslatorManager();

        var transPackage = new TransPackage();
        transPackage.sentence = 'Eu gosto de bananas';
        transPackage.langPath = 'pt,en,ja,mx';

        translatorManager.transPackage = transPackage;
        
        translatorManager.prepareResults().then(function (transResultArray) {
            test.equal(transResultArray[0].fromLang, 'pt');
            test.equal(transResultArray[0].toLang, 'en');

            test.equal(transResultArray[1].fromLang, 'en');
            test.equal(transResultArray[1].toLang, 'ja');

            test.equal(transResultArray[2].fromLang, 'ja');
            test.equal(transResultArray[2].toLang, 'mx');
        });

        test.done();
    },
};
