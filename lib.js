/*global window: false*/
(function (window) {
    'use strict';
    var myModule = {},
        callCount = 0; // can't be read or set from outside
    function incrementCallCount() { // can't be called from outside
        callCount = callCount + 1;
    }
    myModule.getCallCount = function () {
        return callCount;
    };
    myModule.echo = function (input) {
        incrementCallCount();
        return input;
    };
    myModule.getStatistics = function () {
        return 'Number of calls to echo method: ' + this.getCallCount();
    };
    window.myModule = myModule;
}(window));
