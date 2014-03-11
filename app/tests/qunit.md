  - ok()
    - A boolean check, equivalent to CommonJS’s assert.ok() and JUnit’s assertTrue(). Passes if the first argument is truthy.

  - throws()
    - Test if a callback throws an exception, and optionally compare the thrown error.


  - equal()
    - A non-strict comparison, roughly equivalent to JUnit’s assertEquals.

  - notEqual()
    - A non-strict comparison, checking for inequality.


  - deepEqual()
    - A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.

  - notDeepEqual()
    - An inverted deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.


  - strictEqual()
    - A strict type and value comparison.

  - notStrictEqual()
    - A strict comparison, checking for inequality.


  - propEqual()
    - A strict type and value comparison of an object’s own properties.

  - notPropEqual()
    - A strict comparison of an object’s own properties, checking for inequality.


