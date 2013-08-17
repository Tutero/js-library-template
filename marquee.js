(function(wndw) {
    var _private = {
        moveItMoveIt: function() {
            var currentLeft = parseInt(this.elem.style.left, 10);
            if (currentLeft > window.innerWidth) {
                this.direction = 'backwards';
            } else if (currentLeft < 0) {
                this.direction = 'forwards';
            }
            if (this.direction == 'forwards') {
                newLeft = (currentLeft + 10);
            } else {
                newLeft = (currentLeft - 10);
            }
            this.elem.style.left = newLeft + 'px';
        }
    };
    var Marquee = function(elem) {
        this.elem = elem;
        this.elem.style.position = 'relative';
        this.elem.style.left = '0px';
        this.direction = 'forwards';
        var self = this;
        this.moveTimer = window.setInterval(
            function() {
                _private.moveItMoveIt.call(self);
            },
            50
        );
    };
    Marquee.prototype.stop = function() {
        window.clearInterval(this.moveTimer);
    };
    window.Marquee = Marquee;
})(window);

   
var marquee = new Marquee(document.getElementById("marquee-me"));
window.setTimeout(function() { marquee.stop(); }, 5000);
