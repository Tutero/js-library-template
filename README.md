Inspired by Pamela Fox's talk called Beyond jQuery Widgets: JS UI Library Design, at BackboneConf 2013. Video of the talk can be found here: http://www.youtube.com/watch?v=Qkm5h4032ko, and the slides here: http://slid.es/pamelafox/js-ui-library-design/

### 1. Avoid the global namespace
Wrap the library in a Immediately-Invoked Function Expression (IIFE).
```javascript
(function (window) {
    'use strict';
    // ... all vars and functions are in this scope only
    // still maintains access to all globals
    var myModule = {};
    // any functions or properties on the myModule object will become the public
    // interface..
    myModule.echo = function (input) {
        return input;
    };
    window.myModule = myModule; // ..since it is what's exported from this IIFE
}(window));
```
#### Constructor version
In case the library is used to instantiate multiple objects, the public
interface will look like this instead:
```javascript
(function (window) {
    'use strict';
    var myModule = function (params) {
        this.name = params.name;    
    };
    myModule.prototype.echo = function (input) {
        return input;
    };
    window.myModule = myModule;
}(window));
```
### 2. Make private things that are only used internally
To avoid unexpected usages and dependencies, hide as much as possible, and only make a clear API available publicly.
```javascript
(function (window) {
    'use strict';
    var myModule = {},
        callCount = 0; // can't be read or set from outside
    function incrementCallCount() { // can't be called from outside
        callCount = callCount + 1;
    }
    myModule.getStatistics = function () {
        return 'Number of calls to echo method: ' + callCount;
    };
    myModule.echo = function (input) {
        return input;
    };
    window.myModule = myModule;
}(window));
```
### 3. Enable customization
```javascript
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
```
