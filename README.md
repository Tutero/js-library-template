Inspired by Pamela Fox's talk called Beyond jQuery Widgets: JS UI Library Design, at BackboneConf 2013. Video of the talk can be found here: http://www.youtube.com/watch?v=Qkm5h4032ko, and the slides here: http://slid.es/pamelafox/js-ui-library-design/

### 1. Avoid the global namespace
Wrap the library in a Immediately-Invoked Function Expression (IIFE).

### 2. Make private things that are only used internally
