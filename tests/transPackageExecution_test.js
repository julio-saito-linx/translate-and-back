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
// var TransResult = require('../clientapp/models/transResult');
var _ = require('underscore');

exports.transPackageValidation = {
    setUp: function (done) {
        // setup here
        done();
    },

    'prepareResults() returns a promise with an array of transResult': function (test) {
        var translatorManager = new TranslatorManager();

        var transPackage = new TransPackage();
        transPackage.sentence = 'Eu gosto de bananas';
        transPackage.langPath = 'pt,en';

        translatorManager.transPackage = transPackage;
        
        translatorManager.prepareResults().then(function (transResultArray) {
            test.ok(_.isArray(transResultArray), 'must be an array');
            test.equal(typeof transResultArray[0], 'object', 'first element is an object');
            
            test.done();
        });

    },

    'prepareResults() verifying transResultArray ': function (test) {
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
            
            test.done();
        });

    },

    'prepareResults() sets first transResultArray item the original sentence ': function (test) {
        var translatorManager = new TranslatorManager();

        var transPackage = new TransPackage();
        transPackage.sentence = 'Eu gosto de bananas';
        transPackage.langPath = 'pt,en,ja,mx';

        translatorManager.transPackage = transPackage;
        
        translatorManager.prepareResults().then(function (transResultArray) {
            test.equal(transResultArray[0].fromSentence, 'Eu gosto de bananas');
            test.equal(transResultArray[1].fromSentence, '');
            
            test.done();
        });

    },

    'translateNext() returns transResult': function (test) {
        var translatorManager = new TranslatorManager();

        var transPackage = new TransPackage();
        transPackage.sentence = 'Eu gosto de bananas';
        transPackage.langPath = 'pt,en,ja,mx';

        translatorManager.transPackage = transPackage;

        var translatorControllerMocked = {
            callTranslate: function (text/*, from, to*/) {
                return {
                    then: function (cb) {
                        cb(text + ',TRANSLATED');
                    }
                };
            }
        };
        
        translatorManager.prepareResults().then(function (transResultArray) {
            var transResult = transResultArray[0];

            translatorManager.translateNext(translatorControllerMocked, transResult)
            .then(function (transResult) {
                test.equal(transResult.fromLang, 'pt');
                test.equal(transResult.fromSentence, 'Eu gosto de bananas');
                test.equal(transResult.toLang, 'en');
                test.equal(transResult.toSentence, 'Eu gosto de bananas,TRANSLATED');

                test.done();
            });

        });

    },

    'translateAll() returns an Array': function (test) {
        var translatorManager = new TranslatorManager();

        var transPackage = new TransPackage();
        transPackage.sentence = 'Eu gosto de bananas';
        transPackage.langPath = 'pt,en,ja,mx';

        translatorManager.transPackage = transPackage;

        var translatorControllerMocked = {
            callTranslate: function (text/*, from, to*/) {
                return {
                    then: function (cb) {
                        cb(text + ',TRANSLATED');
                    }
                };
            }
        };
        
        translatorManager.prepareResults().then(function () {
            
            translatorManager.translateAll(translatorControllerMocked)
            .then(function (allTransResults) {
                test.equal(allTransResults.length, 3);

                test.equal(allTransResults[0].fromLang, 'pt');
                test.equal(allTransResults[0].fromSentence, 'Eu gosto de bananas');
                test.equal(allTransResults[0].toLang, 'en');
                test.equal(allTransResults[0].toSentence, 'Eu gosto de bananas,TRANSLATED');

                test.equal(allTransResults[1].fromLang, 'en');
                test.equal(allTransResults[1].fromSentence, 'Eu gosto de bananas,TRANSLATED');
                test.equal(allTransResults[1].toLang, 'ja');
                test.equal(allTransResults[1].toSentence, 'Eu gosto de bananas,TRANSLATED,TRANSLATED');

                test.done();
            });

        });

    },
};
