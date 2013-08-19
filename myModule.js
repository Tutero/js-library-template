/* myModule

Why does this library exist?
==============================
To quickly get started when facing the task of writing a front end JavaScript
library. Also, a place to collect and exemplify best practices for libraries.

How do you use this library?
==============================
Clone the project, use it as a starting point for your library.

Future work
==============================
Extend to node.js as well as browser, currently browser only.

*/
/*global window: false, define: false, ender: false*/
(function (window, event) {
    'use strict';
    var myModule = {},
        defaultOptions = {
            'limit': 10
        },
        settings = defaultOptions,
        eventListeners = {},
        callCount = 0;
    function incrementCallCount() {
        callCount = callCount + 1;
    }
    myModule.on = function (type, listener) {
        if (typeof eventListeners[type] === 'undefined') {
            eventListeners[type] = [];
        }
        eventListeners[type].push(listener);
    };
    myModule.fire = function (eventName) {
        var i, len, listeners;
        event = { 'type': eventName };
        if (!event.target) {
            event.target = this;
        }
        if (eventListeners[event.type] instanceof Array) {
            listeners = eventListeners[event.type];
            for (i = 0, len = listeners.length; i < len; i += 1) {
                listeners[i].call(this, event);
            }
        }
    };
    myModule.set = function (options) {
        settings = options;
    };
    myModule.getStatistics = function () {
        return 'Number of calls to echo method: ' + callCount;
    };
    myModule.echo = function (input) {
        if (settings.limit <= callCount) {
            this.fire('limit');
        } else {
            incrementCallCount();
            return input;
        }
    };
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return myModule;
        });
    } else if (typeof window !== 'undefined' && typeof ender === 'undefined') {
        window.myModule = myModule;
    }
}(window, window.event));
