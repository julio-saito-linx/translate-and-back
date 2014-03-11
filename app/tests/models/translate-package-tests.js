define(function (require) {

  // Import depdendencies.
  var TextItem = require("models/text-item");
  var TranslationPackage = require("models/translation-package");

  // Locals
  var translationPackage;

  // Define the QUnit module and lifecycle.
  QUnit.module("model/translate-package-tests", { 
    setup: function () {
      translationPackage = new TranslationPackage();
    },
    teardown: function () {
      //delete translationPackage;
    }
  });

  QUnit.test("Translation Package - Initial State", function () { 
    QUnit.equal(translationPackage.get('langsPath').length, 0, '"langsPath" property starts empty');
    QUnit.equal(translationPackage.get('textItens').length, 0, '"textItens" property starts empty');
  });

  QUnit.test("Translation Package - Languages Paths - Including", function () { 
    translationPackage.includeLanguage('pt');
    translationPackage.includeLanguage('en');
    
    QUnit.equal(translationPackage.get('langsPath').length, 2, '"langsPath" has two ellements');
  });


  QUnit.test("Translation Package - Languages Paths", function () { 
    translationPackage.includeLanguage('pt');
    translationPackage.includeLanguage('en');
    
    QUnit.equal(translationPackage.get('langsPath').length, 2, '"langsPath" has two ellements');
  });

});