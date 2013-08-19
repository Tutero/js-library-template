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
* Extend to node.js as well as browser, currently browser only.
* Does the whole module need to be wrapped in an object, to be able to have a
  convenient 'this' scope? Does calling functions in the "global" scope cause
  problems? (this will be undefined in strict mode..)

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
        callCount = 0,
        incrementCallCount,
        fire;
    incrementCallCount = function () {
        callCount = callCount + 1;
    };
    fire = function (eventName) {
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
    myModule.on = function (type, listener) {
        if (typeof eventListeners[type] === 'undefined') {
            eventListeners[type] = [];
        }
        eventListeners[type].push(listener);
    };
    myModule.set = function (options) {
        settings = options;
    };
    myModule.getStatistics = function () {
        return 'Number of calls to echo method: ' + callCount;
    };
    myModule.echo = function (input) {
        if (settings.limit <= callCount) {
            fire('limit');
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
