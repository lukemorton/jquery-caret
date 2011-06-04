# jQuery Caret

This is a very simple lightweight plugin to allow you to move the
caret (or cursor) position in an &lt;input /&gt; or &lt;textarea&gt;
element.

By exposing three jQuery.fn methods you can easily move a a caret to
any position you like:

## $.fn.caretTo( index , [ offset ] )

This methods first parameter is the index of where you want to move
the caret to. In order to move to an index, index must be an integer.

Alternatively you can pass a string as an index and it will be used
via .indexOf() the element's value to get an index to move to. *You
could also use a RegExp object.*

The second parameter is to be used to move the caret to an offset of
the index. When set to true, it will move the cursor after the string
if a string was passed.

```
$('input').caretTo(10);

// Move to position just before word
$('input').caretTo('hello');

// Move to position just after word
$('input').caretTo('hello', true);

// Move to offset from word's beginning
$('input').caretTo('hello', 6);
```

## $.fn.caretToStart()

This is a shortcut for $.fn.caretTo(0) as a convenience to you.

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