(function ($) {
    $.setCaretTo = function (el, pos) {
        if (el.createTextRange) { 
            var range = el.createTextRange(); 
            range.move("character", pos); 
            range.select(); 
        } else if (el.selectionStart != null) { 
            el.focus(); 
            el.setSelectionRange(pos, pos); 
        } else {
            $.error('Unknown selection implementation.');
        }
    };
    $.fn.setCaretTo = function (pos) {
        return this.queue(function (next) {
            $.setCaretTo(this, pos);
            next();
        });
    };
    $.fn.setCaretToStart = function () {
        return this.setCaretTo(0);
    };
    $.fn.setCaretToEnd = function () {
        return this.queue(function (next) {
            $.setCaretTo(this, $(this).val().length);
            next();
        });
    };
}(jQuery));