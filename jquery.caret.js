// Set caret position easily in jQuery
// Written by and Copyright of Luke Morton, 2011
// Licensed under MIT
(function ($) {
    // Behind the scenes method deals with browser
    // idiosyncrasies and such
    $.caretTo = function (el, pos) {
        if (el.createTextRange) { 
            var range = el.createTextRange(); 
            range.move("character", pos); 
            range.select(); 
        } else if (el.selectionStart != null) { 
            el.focus(); 
            el.setSelectionRange(pos, pos); 
        }
    };

    // The following methods are queued under fx for more
    // flexibility when combining with $.fn.delay() and
    // jQuery effects.

    // Set caret to a particular index
    $.fn.caretTo = function (pos) {
        return this.queue(function (next) {
            $.caretTo(this, pos);
            next();
        });
    };

    // Set caret to beginning of an element
    $.fn.caretToStart = function () {
        return this.caretTo(0);
    };

    // Set caret to the end of an element
    $.fn.caretToEnd = function () {
        return this.queue(function (next) {
            $.caretTo(this, $(this).val().length);
            next();
        });
    };
}(jQuery));