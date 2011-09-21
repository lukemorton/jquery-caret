# jQuery Caret

This is a very simple lightweight plugin to allow you to move the
caret (or cursor) position in an &lt;input /&gt; or &lt;textarea&gt;
element.

By exposing three jQuery.fn methods you can easily move a a caret to
any position you like:

## $.fn.caret()

Use this method with no parameters to get the current position of the
caret within the first element matched.

```
var position = $('input').caret();
```

## $.fn.caret( index , [ offset ] )

This methods first parameter is the index of where you want to move
the caret to. In order to move to an index, index must be an integer.

Alternatively you can pass a string as an index and it will be used
via .indexOf() the element's value to get an index to move to.

The second parameter is to be used to move the caret to an offset of
the index. When set to true, it will move the cursor after the string
if a string was passed.

```
$('input').caret(10);

// Move to position just before word
$('input').caret('hello');

// Move to position just after word
$('input').caret('hello', true);

// Move to offset from word's beginning
$('input').caret('hello', 6);
```

## $.fn.caretToStart()

This is a shortcut for $.fn.caret(0) as a convenience to you.
It's actually longer and less efficient than $.fn.caret(0) use
that, haha.

```
$('textarea').caretToStart();
```

## $.fn.caretToEnd()

This method moves the caret to the end of the content within your
element, also for your convenience.

```
$('input').caretToEnd();
```

## Author

Luke Morton

## License

MIT