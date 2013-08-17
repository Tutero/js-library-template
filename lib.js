/*global window: false*/
(function (window) {
    'use strict';
    var myModule = {},
        options = {
            'limit': 10
        },
        callCount = 0;
    function incrementCallCount() {
        callCount = callCount + 1;
    }
    myModule.set = function (newOptions) {
        options = newOptions;
    }
    myModule.getStatistics = function () {
        return 'Number of calls to echo method: ' + callCount;
    };
    myModule.echo = function (input) {
        if (options.limit > callCount) {
            incrementCallCount();
            return input;
        }
    };
    window.myModule = myModule;
}(window));
